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
                        :disabled="(element.name == active) && !element.sections"
                        @click="submenuOpen(element.name)"
                        v-for="element in menus" 
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
          <ion-button v-for="element in submenus" 
                      :key="element.id" 
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
import { MenuCollection, SubmenuCollection, BreadCrumbInterface } from '@/interfaces/menu-interface';

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
      menus: [] as MenuCollection[],
      menuActive: {} as MenuCollection,
      submenus: [] as SubmenuCollection[],
      submenuActive: {} as SubmenuCollection,
      isActiveSubmenu: this.activeSubmenu ? true : false,
      breadCrumbs: [] as BreadCrumbInterface[],
      menuSelectedName: this.active ?? '',
      submenuSelectedName: this.activeSubmenu ?? '',
    }
  },
  props: {
    // Indica el elemento activo en el navbar
    active: {
      type: String,
      default: 'home'
    },
    // Indica el elemento activo del submenu
    activeSubmenu: {
      type: String,
      default: ''
    },
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
      this.menus = response;

      // Busco el menú activo.
      this.searchMenuActive();

      // Busco el submenú activo si lo hubiera.
      this.searchSubmenuActive();
    });

  },

  methods: {
    /**
     * Cierra el submenú actual sea cual sea.
     */
    submenuClose() {
      this.submenus = [];
      this.isActiveSubmenu = false;
    },

    /**
     * Abre el submenú para el menú pulsado.
     */
    submenuOpen(name: string) {
      if (!name || !this.menus || !this.menus.length) {
        return null;
      }

      this.menuSelectedName = name;
      const selectMenu = this.searchMenuActive();

      // En caso de un menú simple
      if (selectMenu && !selectMenu.sections) {
        const group = selectMenu.group ?? null;
        const nameTitle = selectMenu.name ?? null;

        let url = '';

        if (group) {
          url += '/' + group;
        }

        if (nameTitle) {
          url += '/' + nameTitle;
        }

        window.location.href = url;

        // En caso de tener submenú
      } else if (selectMenu && selectMenu.sections) {
        this.searchSubmenuActive();
        this.submenus = selectMenu.sections;
        this.isActiveSubmenu = true;
      }
    },

    /**
     * Busca y establece el menú activo actual.
     */
    searchMenuActive() {
      const menu = this.menus.filter(ele => {
          return ele.name === this.menuSelectedName;
      });

      if (menu && menu.length && menu[0]) {
        this.menuActive = menu[0];
        this.menuSelectedName = menu[0].name;

        return menu[0];
      }

      return null;
    },

    /**
     * Busca y establece el submenú activo actual.
     */
    searchSubmenuActive() {
      const menu = this.menuActive;

      if (! menu.sections || ! menu.sections.length) {
        return null;
      }

      const subMenu = menu.sections;

      if (subMenu && subMenu.length && subMenu[0]) {
        this.submenus = menu.sections;
        this.submenuActive = subMenu[0];
        this.submenuSelectedName = subMenu[0].name;

        return subMenu[0];
      }

      return null;
    },

    /**
     * Devuelve la url hacia un submenú.
     */
    getSubmenuUrl(nameSubmenu: string) {
      if (!nameSubmenu || !this.submenus || !this.submenus.length) {
        return null;
      }

      const selectMenu = this.menus.filter(ele => {
        return ele.name === this.menuSelectedName;
      });

      const selectSubMenu = this.submenus.filter(ele => {
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
    },

    generateBreadCrumb() {
      console.log('breadcrumb');
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
