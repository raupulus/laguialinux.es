<template>
    <navbar active="posts"></navbar>
    
    <ion-content color="dark">
      <bread-crumb class="ion-hide-sm-down"></bread-crumb>
      
      <h1>Show Individual content</h1>
      <h2>Slug</h2>

      <contents-grid></contents-grid>
      
    </ion-content>

    <footer-full></footer-full>
</template>

<script lang="ts">
//import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { IonContent } from '@ionic/vue';
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

import BreadCrumb from '@/components/layouts/BreadCrumb.vue';
import Navbar from '@/components/layouts/Navbar.vue';
import FooterFull from '@/components/layouts/FooterFull.vue';
import ContentsGrid from '@/components/ContentsGrid.vue';

export default defineComponent({
  name: 'GenericPageShowContent',
  components: {
    IonContent,
    BreadCrumb,
    Navbar,
    FooterFull,
    ContentsGrid,
  },
  setup() {
      // Devuelvo los parámetros que vienen por la ruta.
      const route = useRouter();
      return route.currentRoute.value.params;
  }
});
</script>

<style scoped>
.center {
  text-align: center;
}
</style>