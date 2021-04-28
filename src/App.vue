<template>
  <ion-app>
      <main-menu></main-menu>

      <navbar></navbar>

    
      <ion-router-outlet id="menuContent" />

    <!--
    <footer-full></footer-full>
    -->
  </ion-app>
</template>

<script lang="ts">
import { 
  IonApp, 
  IonRouterOutlet, 
  //IonPage, 
  //IonContent, 
  //IonCol,
  //IonRow
} from '@ionic/vue';

import { onMounted, onUpdated, onUnmounted, defineComponent } from 'vue';
import MainMenu from '@/components/layouts/MainMenu.vue';
import Navbar from '@/components/layouts/Navbar.vue';
//import { BreadCrumbInterface } from './interfaces/menu-interface';
//import FooterFull from '@/components/layouts/FooterFull.vue';

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet,
    //IonPage,
    MainMenu,
    Navbar,
    //IonContent,
    //IonCol,
    //IonRow
    //FooterFull,
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

    /*
    // Devuelvo los parámetros que vienen por la ruta.
    const params = this.$router.currentRoute.value.params;

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

    const router = useRouter();
    const params = router.currentRoute.value.params;

    return {
      params: params,
      //breadCrumbs: breadCrumbs
    }
    */

  },

  /*
  provide() {
    return {
      //params: this.params,
      //breadCrumbs: this.breadCrumbs
    }
  }
  */
});
</script>
