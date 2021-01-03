<template>
  <ion-header>
    <ion-toolbar color="dark">
      
      <!-- Versión para móvil -->
      <ion-row class="ion-hide-sm-up">
        <ion-col>
          <ion-buttons>
            <ion-menu-button menuToggle="main-menu"></ion-menu-button>
          </ion-buttons>
        </ion-col>

        <ion-col>
          <ion-title>
            <ion-back-button default-href="/home"></ion-back-button>
            <ion-img src="/img/logo/logo-60x60.png" 
            style="width: 60px;" class="inline-block"></ion-img>
            <ion-img src="/img/logo/laguialinux-text-red.png" 
            style="width: 500px;" class="inline-block"></ion-img>
          </ion-title>
        </ion-col>

        <ion-col>
          Input - Buscar
        </ion-col>
      </ion-row>

      <!-- Versión para escritorio -->
      <ion-row class="ion-hide-sm-down">
        <ion-col class="center">
          <ion-title size="large">
            <ion-img src="/img/logo/logo-60x60.png" 
            style="width: 60px;" class="inline-block"></ion-img>
            <ion-img src="/img/logo/laguialinux-text-red.png" 
            style="width: 500px;" class="inline-block"></ion-img>
          </ion-title>
        </ion-col>
      </ion-row>

      <ion-row class="ion-hide-sm-down">
        <ion-col class="center">
            <ion-button :color="element.name == active ? 'secondary' : 'primary'" 
                        :disabled="element.name == active"
                        :href="element.url"
                        @click="submenuOpen(element.name)"
                        v-for="element in menu" 
                        :key="element.id"
            >
              {{ element.title }}
            </ion-button>
        </ion-col>
      </ion-row>

    </ion-toolbar>

    <ion-toolbar v-show="isActiveSubmenu"
                 color="primary" 
                 class="ion-hide-sm-down center">
      <ion-row>
        <ion-col class="center">
            <ion-button v-for="element in submenu" 
                        :key="element" 
                        :color="element.name == active ? 'secondary' : 'dark'" 
                        :disabled="element.name == active"
                        :href="element.url">
              {{ element.title }}
            </ion-button>
        </ion-col>
      </ion-row>
    </ion-toolbar>

    <bread-crumb class="ion-hide-sm-down"></bread-crumb>
  </ion-header>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { IonButton } from '@ionic/vue';
import BreadCrumb from '@/components/layouts/BreadCrumb.vue';
import { MainMenuService } from '@/services/main-menu-service';

// Interfaces
import { MenuCollection, SubmenuCollection } from '@/interfaces/menu-interface';


export default defineComponent({
  name: 'NavBar',
  components: {
    IonButton, 
    BreadCrumb,
  },
  data() {
    return {
      menu: [] as MenuCollection[],
      submenu: [] as SubmenuCollection[],
      isActiveSubmenu: this.activeSubmenu ? true : false
    }
  },
  props: {
    // Indica el elemento actio en el navbar
    active: {
      type: String,
      default: 'home'
    },
    activeSubmenu: {
      type: String,
      default: 'home'
    }
  },
  setup() {
    const isOpenRef = ref(false);
    const event = ref();
    const setOpen = (state: boolean /*, event?: Event */) => {
      //event.value = event; 
      isOpenRef.value = state;
    }
    return { isOpenRef, setOpen, event }
  },
  beforeCreate() {
    new MainMenuService().getMenu().then((response) => {
      this.menu = response;
    });
  },

  methods: {
    /**
     * Cierra el submenú actual sea cual sea.
     */
    submenuClose() {
      this.submenu = [];
      this.isActiveSubmenu = false;
    },

    /**
     * Abre el submenú para el menú pulsado.
     */
    submenuOpen(name: string) {
      if (name && this.menu && this.menu.length) {
        const submenu = this.menu.filter(ele => {
            return ele.name === name;
        });

        if (submenu && submenu.length && submenu[0].sections ) {
          this.submenu = submenu[0].sections;
          this.isActiveSubmenu = true;
        }
      }
    }
  },
});
</script>

<style scoped>
.center {
  text-align: center;
}

.inline-block {
  display: inline-block;
}
</style>
