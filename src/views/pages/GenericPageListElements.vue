<template>
    <navbar :active="params.subsection ?? params.slug" 
            :activeSubmenu="(params.subsection && params.slug) ? params.slug : ''"></navbar>
    
    <ion-content color="dark">
      <!--
      <bread-crumb class="ion-hide-sm-down" :breadcrumbs="breadCrumbs"></bread-crumb>
      -->

      <h1>Page List</h1>
      <h2>slug: {{params.slug ?? ''}}</h2>
      <h2>subsección: {{params.subsection ?? ''}}</h2>

      <contents-grid></contents-grid>


      
    </ion-content>

    <footer-full></footer-full>
</template>

<script lang="ts">
//import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { IonContent } from '@ionic/vue';
import { defineComponent } from 'vue';
import { onMounted, onUpdated, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';

//import BreadCrumb from '@/components/layouts/BreadCrumb.vue';
import Navbar from '@/components/layouts/Navbar.vue';
import FooterFull from '@/components/layouts/FooterFull.vue';
import ContentsGrid from '@/components/ContentsGrid.vue';
import { BreadCrumbInterface } from '../../interfaces/menu-interface';


export default defineComponent({
  name: 'GenericPageListElements',
  components: {
    IonContent,
    //BreadCrumb,
    Navbar,
    FooterFull,
    ContentsGrid,
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

    if (params.subsection && params.subsection.toString().length) {
      breadCrumbs.push({name: params.subsection.toString()});
    }
    
    if (params.slug) {
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
});
</script>

<style scoped>
.center {
  text-align: center;
}
</style>