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
                     style="width: 60px;"
                     class="inline-block"></ion-img>

            <ion-img src="/img/logo/laguialinux-text-red.png"
                     style="width: 500px;"
                     class="inline-block"></ion-img>
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
                        @click="submenuOpen(element.name)"
                        v-for="element in menu" 
                        :key="element.id"
            >
              <ion-icon v-if="element.sections"
                        slot="icon-only" 
                        :icon="caretDownOutline"></ion-icon>
              {{ element.title }}
            </ion-button>
        </ion-col>
      </ion-row>

    </ion-toolbar>

    <ion-toolbar v-show="isActiveSubmenu"
                 color="primary" 
                 class="ion-hide-sm-down center">
      <ion-row>
        <div>
          <ion-button color="dark" @click="submenuClose()" class="closeMenu">
            <ion-icon slot="icon-only"
                      size="large"
                      color="warning"
                      fill="outline"
                      shape="round"
                      strong="true"
                      :icon="closeCircleOutline"></ion-icon>
          </ion-button>
        </div>
        <ion-col class="center">
          <ion-button v-for="element in submenu" 
                      :key="element" 
                      :color="element.name == active ? 'secondary' : 'dark'" 
                      :disabled="element.name == active"
                      :href="getSubmenuUrl(element.name)">
            {{ element.title }}
          </ion-button>
        </ion-col>
      </ion-row>
    </ion-toolbar>

  </ion-header>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { MainMenuService } from '@/services/main-menu-service';
import { caretDownOutline, closeCircleOutline } from 'ionicons/icons';
import { 
  IonCol, 
  IonRow, 
  IonMenuButton, 
  IonImg, 
  IonButton, 
  IonButtons, 
  IonBackButton, 
  IonIcon,
  IonHeader,
  IonToolbar,
  IonTitle,
} from '@ionic/vue';

// Interfaces
import { MenuCollection, SubmenuCollection } from '@/interfaces/menu-interface';

export default defineComponent({
  name: 'NavBar',
  components: {
    IonCol, 
    IonRow, 
    IonMenuButton, 
    IonImg, 
    IonButton, 
    IonButtons, 
    IonBackButton,
    IonIcon,
    IonHeader,
    IonToolbar,
    IonTitle,
  },
  data() {
    return {
      menu: [] as MenuCollection[],
      submenu: [] as SubmenuCollection[],
      isActiveSubmenu: this.activeSubmenu ? true : false,
      menuSelected: ''
    }
  },
  props: {
    // Indica el elemento activo en el navbar
    active: {
      type: String,
      default: 'home'
    },
    activeSubmenu: {
      type: String,
      default: ''
    }
  },
  setup() {
    const isOpenRef = ref(false);
    const event = ref();
    const setOpen = (state: boolean /*, event?: Event */) => {
      //event.value = event; 
      isOpenRef.value = state;
    }
    return { isOpenRef, setOpen, event, caretDownOutline, closeCircleOutline}
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
      if (!name || !this.menu || !this.menu.length) {
        return null;
      }

      const selectMenu = this.menu.filter(ele => {
          return ele.name === name;
      });

      if (selectMenu && selectMenu.length && selectMenu[0] && !selectMenu[0].sections) {
        const group = selectMenu[0].group ?? null;
        const nameTitle = selectMenu[0].name ?? null;

        let url = '';

        if (group) {
          url += '/' + group;
        }

        if (nameTitle) {
          url += '/' + nameTitle;
        }

        console.log(url);

        window.location.href = url;
      } else if (selectMenu && selectMenu.length && selectMenu[0] && selectMenu[0].sections ) {
        this.submenu = selectMenu[0].sections;
        this.isActiveSubmenu = true;
        this.menuSelected = name;
      }
    },

    getSubmenuUrl(nameSubmenu: string) {
      if (!nameSubmenu || !this.submenu || !this.submenu.length) {
        return null;
      }

      const selectMenu = this.menu.filter(ele => {
        return ele.name === this.menuSelected;
      });

      const selectSubMenu = this.submenu.filter(ele => {
        return ele.name === nameSubmenu;
      });

      if (selectMenu && selectMenu.length && selectMenu[0] && selectMenu[0].sections && 
          selectSubMenu && selectSubMenu.length && selectSubMenu[0]) {

        const group = selectMenu[0].group ?? null;
        const nameTitle = selectMenu[0].name ?? null;
        const nameSubtitle = selectSubMenu[0].name ?? null;

        let url = '';

        if (group) {
          url += '/' + group;
        }

        if (nameTitle) {
          url += '/' + nameTitle;
        }

        if (nameSubtitle) {
          url += '/' + nameSubtitle;
        }

        return url;
        //return (selectMenu[0].url ?? '') + '/' + (selectSubMenu[0].url ?? '');
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

.closeMenu {

}
</style>
