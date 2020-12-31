<template>
  <ion-page>
    <main-menu></main-menu>
    <navbar></navbar>
    
    <ion-content>
      <ion-row class="center">
        <ion-col 
          size-sm="12"
          offset-sm="0"
          size-lg="10" 
          offset-lg="1" 
          size-xl="8" 
          offset-xl="2" 
          style="background-color:yellow;">
          3 bloques con imágenes: Vídeos en youtube, iniciarse en linux, contribuir

          <ion-slides pager="true" :options="slideOpts" scrollbar="true">
            <ion-slide>
              <h1>Slide 1</h1>
            </ion-slide>
            <ion-slide>
              <h1>Slide 2</h1>
            </ion-slide>
            <ion-slide>
              <h1>Slide 3</h1>
            </ion-slide>
          </ion-slides>
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
import { IonSlides, IonSlide, IonContent, IonPage} from '@ionic/vue';
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
    Navbar,
    IonSlides, 
    IonSlide
  },
  setup() {
    // Optional parameters to pass to the swiper instance. See http://idangero.us/swiper/api/ for valid options.
    const slideOpts = {
      initialSlide: 1,
      speed: 400
    };

    return {
      router: useRouter(),
      add,
      slideOpts
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

.center {
  text-align: center;
}
</style>