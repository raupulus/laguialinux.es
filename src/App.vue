<template>
  <ion-app>
    <ion-page>
      <main-menu></main-menu>

        <navbar :active="params.subsection ?? params.slug" 
          :activeSubmenu="(params.subsection && params.slug) ? params.slug : ''"></navbar>
      
      <ion-content>
        <ion-router-outlet />
      </ion-content>
    </ion-page>  
  </ion-app>
</template>

<script lang="ts">
import { 
  IonApp, 
  IonRouterOutlet, 
  IonPage, 
  IonContent, 
  //IonCol,
  //IonRow
} from '@ionic/vue';
import { onMounted, onUpdated, onUnmounted, defineComponent } from 'vue';
import MainMenu from '@/components/layouts/MainMenu.vue';
import Navbar from '@/components/layouts/Navbar.vue';
import { BreadCrumbInterface } from './interfaces/menu-interface';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet,
    IonPage,
    MainMenu,
    Navbar,
    IonContent,
    //IonCol,
    //IonRow
 },
 setup() {
    onMounted(() => {
      console.log('Component mounted!');
    });
    
    onUpdated(() => {
      console.log('Component updated!');
    });
    
    onUnmounted(() => {
      console.log('Component unmounted!');
    });

    // Devuelvo los parámetros que vienen por la ruta.
    const route = useRouter();
    const params = route.currentRoute.value.params;

    const breadCrumbs = [] as BreadCrumbInterface[];

    if (params && params.subsection && params.subsection.toString().length) {
      breadCrumbs.push({name: params.subsection.toString()});
    }
    
    if (params && params.slug) {
      breadCrumbs.push({
        name: params.slug.toString(),
        active: true
      });
    }

    return { 
      params,
      breadCrumbs: breadCrumbs
    };
  },

  provide() {
    return {
      params: this.params,
      breadCrumbs: this.breadCrumbs
    }
  }
});
</script>
