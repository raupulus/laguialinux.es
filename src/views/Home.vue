<template>
  <ion-page>
    <main-menu></main-menu>
    
    <ion-content>
      <ion-list>
        <ion-item>
          <ion-checkbox slot="start"></ion-checkbox>
          <ion-label>
            <h1>Create Idea</h1>
            <ion-note>Run Idea By Brandy</ion-note>
          </ion-label>
          <ion-badge color="success" slot="end">
            5 Days
          </ion-badge>
        </ion-item>
      </ion-list>

      <ion-row>
        <ion-col>
          <ion-button @click="MainMenu.openCustom();">
            BTN-1
          </ion-button>
        </ion-col>
      </ion-row>

      <ion-row>
        <ion-col>
          <ion-button ion-button menuToggle="custom">Toggle Right Menu</ion-button>
          <button ion-button menuToggle>Toggle Menu</button>
          
          <ion-toolbar color="primary">
            <ion-buttons slot="start">
              <ion-menu-button menuToggle="main-menu"></ion-menu-button>
            </ion-buttons>
            <ion-title>
              3333
            </ion-title>
          </ion-toolbar>
        </ion-col>
      </ion-row>

      <ion-fab vertical="bottom" horizontal="end" slot="fixed">
        <ion-fab-button @click="() => router.push('/new')">
          <ion-icon :icon="add"></ion-icon>
        </ion-fab-button>
      </ion-fab>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonFab, IonFabButton, IonIcon, IonContent, IonPage} from '@ionic/vue';
import { defineComponent } from 'vue';
import { add } from 'ionicons/icons';
import { useRouter } from 'vue-router';

import MainMenu from '@/components/MainMenu.vue';

export default defineComponent({
  name: 'Home',
  components: {
    IonContent,
    IonFab,
    IonFabButton,
    IonIcon,
    IonPage,
    MainMenu,
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