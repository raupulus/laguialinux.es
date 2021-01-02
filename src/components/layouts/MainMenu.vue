<template>
  <ion-menu side="start" persistent="true" id="main-menu" swipeEnabled="true"
    menu-id="main-menu" class="main-menu" content-id="main-menu">
    <ion-header>
      <ion-toolbar color="tertiary">
        <ion-title>(Logo) La Guía Linux</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item>Inicio</ion-item>
        <ion-item>Guías</ion-item>
        <ion-item>Noticias</ion-item>
        <ion-item>Apps</ion-item>
        <ion-item>Contacto</ion-item>
        <ion-item>Videotutoriales</ion-item>
        <ion-item>Distribuciones</ion-item>
        <ion-item>Juegos</ion-item>
        <ion-item>Enlaces Amigos</ion-item>
        <ion-item>About</ion-item>
      </ion-list>
    </ion-content>
  </ion-menu>

  <ion-router-outlet id="main"></ion-router-outlet>
</template>
<style scoped>
.main-menu {
  --width: 500px;
}
</style>

<script>
import { 
  IonContent, 
  IonHeader, 
  IonItem, 
  IonList, 
  IonMenu, 
  IonRouterOutlet,
  IonTitle, 
  IonToolbar,
  menuController
} from '@ionic/vue';

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MainMenu',
  components: {
    IonContent, 
    IonHeader, 
    IonItem, 
    IonList, 
    IonMenu, 
    IonRouterOutlet,
    IonTitle, 
    IonToolbar
  },
  methods: {
    openCustom() {
      menuController.enable(true, 'main-menu');
      menuController.open('main-menu');
    }
  }
});
</script>