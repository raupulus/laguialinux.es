<template>
    <navbar active="home"></navbar>
    
    <ion-content color="dark">
      <ion-row class="center">
        <ion-col 
          size-sm="12"
          offset-sm="0"
          size-lg="10" 
          offset-lg="1" 
          size-xl="8" 
          offset-xl="2">

          <ion-slides pager="true" :options="slideOpts" scrollbar="true">
            <ion-slide>
              <ion-img src="/img/slides/main/slide1.png"></ion-img>
            </ion-slide>
            <ion-slide>
              <ion-img src="/img/slides/main/slide2.png"></ion-img>
            </ion-slide>
            <ion-slide>
              <ion-img src="/img/slides/main/slide3.png"></ion-img>
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
            <ion-col size-sm="12"
              size-md="6"
              size-lg="4" 
              size-xl="4">
              <ion-card>
                <ion-card-header>
                  <ion-img src="https://laguialinux.es/images/Miniaturas-Pagina-Principal/La-Guia-Linux-en-Youtube.jpg"></ion-img>
                  <ion-card-title>Vídeotutoriales Youtube</ion-card-title>
                </ion-card-header>
              </ion-card>

            </ion-col>

            <ion-col size="12"
              size-md="6"
              size-lg="4" 
              size-xl="4">
              <ion-card>
                <ion-card-header>
                  <ion-img src="https://laguialinux.es/images/Miniaturas-Pagina-Principal/La-Guia-Linux-en-Youtube.jpg"></ion-img>
                  <ion-card-title>Entradas para iniciarse a Linux</ion-card-title>
                </ion-card-header>
              </ion-card>
            </ion-col>

            <ion-col size="12"
              size-md="6"
              size-lg="4" 
              size-xl="4">
              <ion-card>
                <ion-card-header>
                  <ion-img src="https://laguialinux.es/images/Miniaturas-Pagina-Principal/La-Guia-Linux-en-Youtube.jpg"></ion-img>
                  <ion-card-title>Contribuidores al sitio WEB</ion-card-title>
                </ion-card-header>
              </ion-card>
            </ion-col>
          </ion-row>
        </ion-col>
      </ion-row>

      <contents-grid></contents-grid>
      
    </ion-content>

    <footer-full></footer-full>
</template>

<script lang="ts">
import { IonCard, IonSlides, IonSlide, IonContent} from '@ionic/vue';
import { defineComponent } from 'vue';
import { add } from 'ionicons/icons';
import { useRouter } from 'vue-router';

import Navbar from '@/components/layouts/Navbar.vue';
import FooterFull from '@/components/layouts/FooterFull.vue';
import ContentsGrid from '@/components/ContentsGrid.vue';

export default defineComponent({
  name: 'Home',
  components: {
    IonContent,
    Navbar,
    FooterFull,
    ContentsGrid,
    IonSlides, 
    IonSlide,
    IonCard,
  },
  setup() {
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
.center {
  text-align: center;
}
</style>