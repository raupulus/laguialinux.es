<template>
    <ion-page>
      <ion-content color="dark">
        <ion-row class="center">
          <ion-col
            size-sm="12"
            offset-sm="0"
            size-lg="10"
            offset-lg="1"
            size-xl="8"
            offset-xl="2">
            Página de búsqueda
          </ion-col>
        </ion-row>
        
      </ion-content>

    </ion-page>  
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { 
  IonContent,
  IonCol,
  IonRow,
  IonPage
} from '@ionic/vue';

export default defineComponent({
  name: 'Search',
  components: {
    IonContent,
    IonCol,
    IonRow,
    IonPage
  },
  props: ['forceSlug'],
  
});
</script>

<style scoped>
.center {
  text-align: center;
}
</style>