<template>
  <ion-page>
    <main-menu></main-menu>
    <navbar></navbar>
    
    <ion-content>
      <ion-row>
        <ion-col>
          Slide
        </ion-col>
      </ion-row>

      <ion-row>
        <ion-col>
          3 bloques con imágenes: Vídeos en youtube, iniciarse en linux, contribuir
        </ion-col>
      </ion-row>

      <ion-row>
        <ion-col>
          Descripción de filosofía software libre y animando a colaborar.
        </ion-col>
      </ion-row>

      <ion-row>
        <ion-col>
          Entradas con carga infinita.
        </ion-col>
      </ion-row>

      
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonPage} from '@ionic/vue';
import { defineComponent } from 'vue';
import { add } from 'ionicons/icons';
import { useRouter } from 'vue-router';

import MainMenu from '@/components/MainMenu.vue';
import Navbar from '@/components/layouts/Navbar.vue';

export default defineComponent({
  name: 'Home',
  components: {
    IonContent,
    IonPage,
    MainMenu,
    Navbar
  },
  setup() {
    return {
      router: useRouter(),
      add
    }
  }
});
</script>

<style scoped>
#container {
  text-align: center;
  
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  
  color: #8c8c8c;
  
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>