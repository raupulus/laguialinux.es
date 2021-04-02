<template>
    <navbar :active="params.subsection ?? params.slug" 
            :activeSubmenu="params.subsection ?? ''"></navbar>
    
    <ion-content color="dark">
      <bread-crumb class="ion-hide-sm-down"></bread-crumb>
      
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

import BreadCrumb from '@/components/layouts/BreadCrumb.vue';
import Navbar from '@/components/layouts/Navbar.vue';
import FooterFull from '@/components/layouts/FooterFull.vue';
import ContentsGrid from '@/components/ContentsGrid.vue';

export default defineComponent({
  name: 'GenericPageListElements',
  components: {
    IonContent,
    BreadCrumb,
    Navbar,
    FooterFull,
    ContentsGrid,
  },
  setup(props, context) {
    
    //https://pablomagaz.com/blog/nueva-composition-api-vue-3
    
    onMounted(() => {
      console.log('Component mounted!');
      console.log('Props: ', props);
      console.log('Context: ', context);
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

    console.log('Parámetros: ', params);
    
    return { 
      params,
      breadcrumb: [
        {
          name: 'home'
        },
        {
          name: 'route1'
        },
        {
          name: 'route2',
          active: true
        }
      ]
    };
  }
});
</script>

<style scoped>
.center {
  text-align: center;
}
</style>