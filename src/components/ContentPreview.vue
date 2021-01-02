<template>
  <ion-card>
    <ion-card-header>
      <ion-img v-if="content.image && content.image.src"
               :src="content.image.src"
               :alt="content.image.alt ?? 'Imagen'"></ion-img>
      <ion-card-title v-if="content.title">
        <span v-if="content.url">
          <a :href="content.url">
            {{ content.title }}
          </a>
        </span>

        <span v-else>
          {{ content.title }}
        </span>
      </ion-card-title>
      
      <ion-card-subtitle v-if="content.subtitle">
        {{ content.subtitle }}
      </ion-card-subtitle>
    </ion-card-header>

    <ion-card-content v-if="content.description">
      {{ content.description }}
    </ion-card-content>
  </ion-card>
</template>

<script lang="ts">
import { IonCard, IonCardContent, IonCardSubtitle } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  props: [
    'content',
  ],
  name: 'ContentPreview',
  components: {
    IonCard, 
    IonCardContent, 
    IonCardSubtitle
  },
});
</script>

<style scoped>
.center {
  text-align: center;
}
</style>