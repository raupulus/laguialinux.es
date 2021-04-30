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
            <ion-button :color="(element.name == slug) || (element.name == subsection) ? 'warning' : 'primary'" 
                        :disabled="(element.name == slug) && !element.sections"
                        @click="!element.sections ? navigateTo(generateLink(element.name, element.group)) : subMenuOpen(element.name)"
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
          <ion-button v-for="element in subMenus"
                      :key="element.id"
                      :color="element.name == subMenuSelectedName ? 'warning' : 'dark'"
                      :disabled="element.name == subMenuSelectedName"
                      @click="() => navigateTo(generateSubmenuLink(element.name, element.group))">
            {{ element.title }}
          </ion-button>
        </ion-col>
      </ion-row>
    </ion-toolbar>

  </ion-header>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, ref, watch } from 'vue';
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

    const menuSelectedName = ref((route.params.slug && route.params.subsection) ? route.params.subsection : route.params.slug as string);
    const menus = ref([] as MenuCollection[]);
    const menuActive = ref({} as MenuCollection);

    const subMenuSelectedName = ref((route.params.slug && route.params.subsection) ? route.params.slug : '' as string);
    const subMenus = ref([] as SubmenuCollection[]);
    const subMenuActive = ref({} as SubmenuCollection|null);

    const searchSubMenuActive = () => {
      const menu = menuActive.value;
      
      if (! menu || ! menu.sections || ! menu.sections.length) {
        return null;
      }

      subMenus.value = menu.sections ?? [];

      if (subMenus.value && subMenus.value.length) {
        const newSubMenuActive = subMenus.value.filter(ele => {
          return ele.name === subMenuSelectedName.value;
        });

        if (newSubMenuActive && newSubMenuActive.length) {
          subMenuActive.value = newSubMenuActive[0];
        }

        return newSubMenuActive[0];
      }

      return null;
    };
     
    /**
     * Busca y establece el menú activo actual.
     */
    const searchMenuActive = () => {
      if (menus.value && menus.value.length) {
        const menu = menus.value.filter(ele => {
          return ele.name === menuSelectedName.value;
        });

        if (menu && menu.length && menu[0] && menu[0].name) {
          menuActive.value = menu[0];
          menuSelectedName.value = menu[0].name;

          searchSubMenuActive();

          return menu[0];
        }
      }

      return [];
    };

    /**
     * Lleva a la página recibida.
     */
    const navigateTo = (path: string) => {
      router.push(path);
    };

    /**
     * Vuelve a actualizar los datos para los menús por completo descargando
     * de la API si fuera necesario.
     */
    const getMenus = () => {
      new MainMenuService().getMenu().then((response) => {
        menus.value = response;
        searchMenuActive();
      });
    }

    const updateComponent = () => {
      slug.value = route.params.slug ?? (route.path && route.path.replaceAll('/', '') ? route.path.replaceAll('/', '') : 'home');
      subsection.value = route.params.subsection;
      params.value = route.params;
      menuSelectedName.value = (slug.value && subsection.value) ? subsection.value : slug.value ?? '/',
      subMenuSelectedName.value = (slug.value && subsection.value) ? slug.value : '';
      isOpenRef.value = (slug.value && subsection.value) ? true : false;

      // Busca y actualiza los menús y submenús.
      searchMenuActive();
    };

    const subMenuClose = () => {
      isOpenRef.value = false;
      subMenus.value = [] as SubmenuCollection[];
      subMenuActive.value = {} as SubmenuCollection;
      subMenuSelectedName.value = '';
    }

    const generateSubmenuLink = (nameSubmenu: string) => {

      if ( ! nameSubmenu) {
        return null;
      }

      const selectMenu = menus.value.filter(ele => {
        return ele.name === menuSelectedName.value;
      });

      const selectSubMenu = subMenus.value.filter(ele => {
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
      }

      return '/';
    };

    const generateLink = (slug: string, group?: string) => {
      
      let url = '';

      if (group) {
        url += '/' + group;
      }

      if (slug) {
        url += '/' + slug;
      }

      return url;
    };

    const subMenuOpen = (name: string) => {
      if (!name || !menus.value || !menus.value.length) {
        return null;
      }

      menuSelectedName.value = name;
      searchMenuActive();

      // En caso de un menú simple
      if (menuActive.value && menuActive.value.sections) {
        isOpenRef.value = true;
      }
    };

    onBeforeMount(() => {
      // Busca y actualiza los menús desde la APi o Storage.
      getMenus();
      updateComponent();
    });

    // Cuando cambia la ruta actualiza el componente.
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
      menus,
      menuActive,
      subMenuSelectedName,
      subMenuActive,
      subMenus,
      subMenuOpen,
      subMenuClose,
      generateLink,
      generateSubmenuLink,
      navigateTo
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
