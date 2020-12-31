<template>
  <ion-app>
    <ion-page>
      <main-menu></main-menu>

      <ion-router-outlet />
    </ion-page>  
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet, IonPage } from '@ionic/vue';
import { defineComponent } from 'vue';
import MainMenu from '@/components/layouts/MainMenu.vue';

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet,
    IonPage,
    MainMenu,
 }
});
</script>