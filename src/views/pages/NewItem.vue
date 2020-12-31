<template>
  <ion-page>
    <navbar></navbar>

    <ion-content>
      CONTENIDO
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonContent,
  IonPage,
} from '@ionic/vue';
import { defineComponent } from 'vue';
import Navbar from '@/components/layouts/Navbar.vue';

export default defineComponent({
  name: 'NewItem',
  components: {
    IonContent,
    IonPage,
    Navbar
  }
});
</script>