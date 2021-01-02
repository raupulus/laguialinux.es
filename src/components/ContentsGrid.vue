<template>
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
      size-xl="3"
      v-for="content in contents" :key="content.id">
        <content-preview :content="content"></content-preview>
      </ion-col>


    </ion-row>
  </ion-col>
</ion-row>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ContentPreview from '@/components/ContentPreview.vue';

export default defineComponent({
  name: 'ContentGrid',
  data() {
    return {
      contents: [
        {
          id: 1,
          title: 'Título 1',
          subtitle: 'Subtítulo',
          description: 'Keep close to Nature´s heart... and break clear away, once in awhile, and climb a mountain or spend a week in the woods. Wash your spirit clean.',
          url: '#',
          image: {
            src: 'https://laguialinux.es/images/Miniaturas-Pagina-Principal/La-Guia-Linux-en-Youtube.jpg',
            alt: 'Alt de la imagen'
          },
        },
        {
          id: 2,
          title: 'Título 2',
          subtitle: 'Subtítulo',
          description: 'Keep close to Nature´s heart... and break clear away, once in awhile, and climb a mountain or spend a week in the woods. Wash your spirit clean.',
          url: '#',
          image: {
            src: 'https://laguialinux.es/images/Miniaturas-Pagina-Principal/La-Guia-Linux-en-Youtube.jpg',
            alt: 'Alt de la imagen'
          },
        },
        {
          id: 3,
          title: 'Título 3',
          subtitle: 'Subtítulo',
          description: 'Keep close to Nature´s heart... and break clear away, once in awhile, and climb a mountain or spend a week in the woods. Wash your spirit clean.',
          url: '#',
          image: {
            src: 'https://laguialinux.es/images/Miniaturas-Pagina-Principal/La-Guia-Linux-en-Youtube.jpg',
            alt: 'Alt de la imagen'
          },
        },
        {
          id: 4,
          title: 'Título 4',
          subtitle: 'Subtítulo',
          description: 'Keep close to Nature´s heart... and break clear away, once in awhile, and climb a mountain or spend a week in the woods. Wash your spirit clean.',
          url: '#',
          image: {
            src: 'https://laguialinux.es/images/Miniaturas-Pagina-Principal/La-Guia-Linux-en-Youtube.jpg',
            alt: 'Alt de la imagen'
          },
        }
      ]
    }
  },
  components: {
    ContentPreview
  },
});
</script>

<style scoped>
.center {
  text-align: center;
}
</style>