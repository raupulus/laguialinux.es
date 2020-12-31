<template>
  
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
        <ion-col size="12"
          size-lg="10" 
          offset-lg="1" 
          size-xl="8" 
          offset-xl="2">
          <ion-row>
            <ion-col size="12">
              Descripción de filosofía software libre y animando a colaborar.
            </ion-col>

            <ion-col size-sm="12"
              size-md="6"
              size-lg="4" 
              size-xl="3">
              <ion-card>
                <ion-card-header>
                  <ion-img src="https://laguialinux.es/images/Miniaturas-Pagina-Principal/La-Guia-Linux-en-Youtube.jpg"></ion-img>
                  <ion-card-title>Vídeotutoriales Youtube</ion-card-title>
                  <ion-card-subtitle>Subtitle</ion-card-subtitle>
                </ion-card-header>

                <ion-card-content>
                  Keep close to Nature's heart... and break clear away, once in awhile,
                  and climb a mountain or spend a week in the woods. Wash your spirit clean.
                </ion-card-content>
              </ion-card>

            </ion-col>

            <ion-col size="12"
              size-md="6"
              size-lg="4" 
              size-xl="3">
              <ion-card>
                <ion-card-header>
                  <ion-img src="https://laguialinux.es/images/Miniaturas-Pagina-Principal/La-Guia-Linux-en-Youtube.jpg"></ion-img>
                  <ion-card-title>Entradas para iniciarse a Linux</ion-card-title>
                  <ion-card-subtitle>Subtitle</ion-card-subtitle>
                </ion-card-header>

                <ion-card-content>
                  Keep close to Nature's heart... and break clear away, once in awhile,
                  and climb a mountain or spend a week in the woods. Wash your spirit clean.
                </ion-card-content>
              </ion-card>

            </ion-col>

            <ion-col size="12"
              size-md="6"
              size-lg="4" 
              size-xl="3">
              <ion-card>
                <ion-card-header>
                  <ion-img src="https://laguialinux.es/images/Miniaturas-Pagina-Principal/La-Guia-Linux-en-Youtube.jpg"></ion-img>
                  <ion-card-title>Contribuidores al sitio WEB</ion-card-title>
                  <ion-card-subtitle>Subtitle</ion-card-subtitle>
                </ion-card-header>

                <ion-card-content>
                  Keep close to Nature's heart... and break clear away, once in awhile,
                  and climb a mountain or spend a week in the woods. Wash your spirit clean.
                </ion-card-content>
              </ion-card>

            </ion-col>

            <ion-col size="12"
              size-md="6"
              size-lg="4" 
              size-xl="3">
              <ion-card>
                <ion-card-header>
                  <ion-img src="https://laguialinux.es/images/Miniaturas-Pagina-Principal/La-Guia-Linux-en-Youtube.jpg"></ion-img>
                  <ion-card-title>Contribuidores al sitio WEB</ion-card-title>
                  <ion-card-subtitle>Subtitle</ion-card-subtitle>
                </ion-card-header>

                <ion-card-content>
                  Keep close to Nature's heart... and break clear away, once in awhile,
                  and climb a mountain or spend a week in the woods. Wash your spirit clean.
                </ion-card-content>
              </ion-card>

            </ion-col>
          </ion-row>
        </ion-col>
      </ion-row>

      <ion-row>
        <ion-col>
          Entradas con carga infinita.
        </ion-col>
      </ion-row>

      
    </ion-content>
</template>

<script lang="ts">
import { IonCard, IonCardContent, IonCardSubtitle, IonSlides, IonSlide, IonContent} from '@ionic/vue';
import { defineComponent } from 'vue';
import { add } from 'ionicons/icons';
import { useRouter } from 'vue-router';

import Navbar from '@/components/layouts/Navbar.vue';

export default defineComponent({
  name: 'Home',
  components: {
    IonContent,
    Navbar,
    IonSlides, 
    IonSlide,
    IonCard, 
    IonCardContent, 
    IonCardSubtitle
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