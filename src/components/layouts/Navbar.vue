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
            <ion-button :color="element.name == menuSelectedName ? 'warning' : 'primary'" 
                        :disabled="(element.name == menuSelectedName) && !element.sections"
                        @click="!element.sections ? navigateTo(element.name) : subMenuOpen(element.name)"
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

    <ion-toolbar v-show="isOpenRef"
                 color="primary" 
                 class="ion-hide-sm-down center">
      <ion-row>
        <div>
          <ion-button color="dark" @click="subMenuClose()" class="closeMenu">
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
                      :color="element.name == subMenuSelectedName ? 'warning' : 'dark'"
                      :disabled="element.name == subMenuSelectedName"
                      @click="router.push(getSubmenuUrl(element.name))">
            {{ element.title }}
          </ion-button>
        </ion-col>
      </ion-row>
    </ion-toolbar>

  </ion-header>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, onMounted, ref, watch } from 'vue';
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

import { useRoute, useRouter } from 'vue-router';

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
      submenus: [] as SubmenuCollection[],
      submenuActive: {} as SubmenuCollection,
      breadCrumbs: [] as BreadCrumbInterface[],
    }
  },
  setup() {
    const isOpenRef = ref(false);
    const event = ref();

    const setOpen = (state: boolean, newEvent?: Event) => {
      event.value = newEvent; 
      isOpenRef.value = state;
    }

    const router = useRouter();
    const route = useRoute();
    const params = ref(route.params);
    const slug = ref();
    const subsection = ref();

    const menuSelectedName = ref(route.params.slug as string|string[]);
    const subMenuSelectedName = ref(route.params.slug as string|string[]);
    const menus = ref([] as MenuCollection[]);
    const menuActive = ref({} as MenuCollection);

     
    /**
     * Busca y establece el menú activo actual.
     */
    const searchMenuActive = () => {

      if (menus.value) {
        const menu = menus.value.filter(ele => {
          return ele.name === menuSelectedName.value;
        });

        console.log(menu);

        if (menu && menu.length && menu[0] && menu[0].name) {
          menuActive.value = menu[0];
          menuSelectedName.value = menu[0].name;

          return menu[0];
        }
      }

      return [];
    };

    const searchSubMenuActive = () => {
      //
    };

    /**
     * Vuelve a actualizar los datos para los menús por completo descargando
     * de la API si fuera necesario.
     */
    const updateMenus = () => {
      new MainMenuService().getMenu().then((response) => {
      menus.value = response;

      // Busco el menú activo.
      searchMenuActive();

      // Busco el submenú activo si lo hubiera.
      searchSubMenuActive();
    });
    }

    const updateSubmenus = () => {
      menuSelectedName.value = route.params.slug,
      subMenuSelectedName.value = route.params.subsection;
      
      searchMenuActive();
      menuActive.value = searchMenuActive() as MenuCollection;

      console.log('Menú Seleccionado: ' + menuSelectedName.value);
      console.log('Submenú Seleccionado: ' + subMenuSelectedName.value);
    };

    const updateComponent = () => {
      slug.value = route.params.slug;
      subsection.value = route.params.subsection;
      params.value = route.params;
      

      // Busca y actualiza los menús.
      updateMenus();

      // Busca y actualiza los submenús.
      updateSubmenus();



      //console.log('Nuevo Slug: ' + params.value.slug);
      //console.log('Nueva Subseccion: ' + params.value.subsection);

      // TODO → Preparar ajax para obtener datos.
    };

    onBeforeMount(() => {
      //
    });
    onMounted(() => updateComponent());

    watch(useRoute(), () => {
      updateComponent();
    });


    return { 
      route,
      router, 
      params,
      slug,
      subsection: subsection,
      isOpenRef, 
      setOpen, 
      event, 
      caretDownOutline, 
      closeCircleOutline,
      menuSelectedName,
      subMenuSelectedName,
      menus,
      menuActive
    }
  },

  beforeUpdate() {
    console.log('Before Updated');
  },

  methods: {
    generateSubMenuLink() {
      //
    },

    generateLink() {
      //

    },
    
    navigateTo(slug: string) {
      this.router.push(slug);
    },


    searchSubMenuActive() {
      //
      return 'benchmarks';
    },

    /**
     * Cierra el submenú actual sea cual sea.
     */
    subMenuClose() {
      async () => this.isOpenRef = false;
      async () => this.submenus = [];
    },

    subMenuOpen(name: string) {
      if (!name || !this.menus || !this.menus.length) {
        return null;
      }

      /*
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

        this.submenuActive = {} as SubmenuCollection;
        this.submenuSelectedName = '';

        this.subMenuClose();

        //window.location.href = url;
        this.router.push(url);
        console.log('Se navega a la url: ' + url);

        // En caso de tener submenú
      } else if (selectMenu && selectMenu.sections) {
        this.searchSubMenuActive();
        this.submenus = selectMenu.sections;
        this.isActiveSubmenu = true;
      }

      */
    },


    
    























    

    /**
     * Abre el submenú para el menú pulsado.
     */
    /*
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

        this.submenuActive = {} as SubmenuCollection;
        this.submenuSelectedName = '';

        this.submenuClose();

        //window.location.href = url;
        this.router.push(url);
        console.log('Se navega a la url: ' + url);

        // En caso de tener submenú
      } else if (selectMenu && selectMenu.sections) {
        this.searchSubmenuActive();
        this.submenus = selectMenu.sections;
        this.isActiveSubmenu = true;
      }
    },

    

    /**
     * Busca y establece el submenú activo actual.
     */
    /*
    searchSubmenuActive() {
      const menu = this.menuActive;

      if (! menu.sections || ! menu.sections.length) {
        return null;
      }

      const subMenu = menu.sections;

      if (subMenu && subMenu.length) {
        this.submenus = menu.sections;

        const submenuActive = menu.sections.filter(ele => {
          return ele.name === this.activeSubmenu;
        });

        if (submenuActive && submenuActive.length) {
          this.submenuActive = submenuActive[0];
          this.submenuSelectedName = submenuActive[0].name;
        }

        return subMenu[0];
      }

      return null;
    },
    */

    /**
     * Devuelve la url hacia un submenú.
     */
    /*
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
  },
  */
  }
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
