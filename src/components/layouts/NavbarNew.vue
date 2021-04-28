<template>
  <ion-header>
    <ion-toolbar color="">
      
      <ion-button router-link="/">Home</ion-button>
      <ion-button @click="() => $router.push('/')">Home</ion-button>
      <ion-button @click="() => $router.push('/section/posts')">Posts</ion-button>
      <ion-button @click="() => $router.push('/section/about')">about</ion-button>
      <ion-button @click="() => $router.push('/section/software-list')">software-list</ion-button>
      <ion-back-button default-href="/"></ion-back-button>

    </ion-toolbar>

  </ion-header>
</template>

<script lang="ts">
import { 
  IonBackButton, 
  IonButton,
  IonHeader,
  IonToolbar,
} from '@ionic/vue';

export default({
  name: 'NavBarNew',
  components: {
    IonBackButton,
    IonHeader,
    IonToolbar,
    IonButton,
  },
});
</script>

<style scoped>
.center {
  text-align: center;
}

.inline-block {
  display: inline-block;
}

.closeMenu {

}
</style>
