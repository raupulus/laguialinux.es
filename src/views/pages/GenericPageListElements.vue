<template>
    
    <ion-row color="dark">
      <ion-col>
        <!--
        <bread-crumb class="ion-hide-sm-down" :breadcrumbs="breadCrumbs"></bread-crumb>
        -->

        <h1>Page List</h1>
        <h2>slug: {{params.slug ?? ''}}</h2>
        <h2>subsección: {{params.subsection ?? ''}}</h2>

        <contents-grid></contents-grid>
      </ion-col>
      
    </ion-row>

    <footer-full></footer-full>
</template>

<script lang="ts">
//import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { defineComponent } from 'vue';

//import BreadCrumb from '@/components/layouts/BreadCrumb.vue';
import FooterFull from '@/components/layouts/FooterFull.vue';
import ContentsGrid from '@/components/ContentsGrid.vue';

import { 
  IonCol, 
  IonRow
} from '@ionic/vue';

export default defineComponent({
  name: 'GenericPageListElements',
  components: {
    FooterFull,
    ContentsGrid,
    IonCol, 
    IonRow
  },

  inject: [
    'params'
  ],
});
</script>

<style scoped>
.center {
  text-align: center;
}
</style>