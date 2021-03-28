<template>
    <navbar active="posts"></navbar>
    
    <ion-content color="dark">
      <bread-crumb class="ion-hide-sm-down"></bread-crumb>
      
      <h1>Page List</h1>

      <contents-grid></contents-grid>


      
    </ion-content>

    <footer-full></footer-full>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

import BreadCrumb from '@/components/layouts/BreadCrumb.vue';
import Navbar from '@/components/layouts/Navbar.vue';
import FooterFull from '@/components/layouts/FooterFull.vue';
import ContentsGrid from '@/components/ContentsGrid.vue';

export default defineComponent({
  name: 'GenericPageListElements',
  components: {
    BreadCrumb,
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