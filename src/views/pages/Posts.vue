<template>
    <navbar active="posts"></navbar>
    
    <ion-content color="dark">

      <contents-grid></contents-grid>
      
    </ion-content>

    <footer-full></footer-full>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

import Navbar from '@/components/layouts/Navbar.vue';
import FooterFull from '@/components/layouts/FooterFull.vue';
import ContentsGrid from '@/components/ContentsGrid.vue';

export default defineComponent({
  name: 'Posts',
  components: {
    Navbar,
    FooterFull,
    ContentsGrid,
  },
  setup() {
    return {
      router: useRouter(),
    }
  }
});
</script>

<style scoped>
.center {
  text-align: center;
}
</style>