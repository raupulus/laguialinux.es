<template>
  <ion-toolbar color="dark" class="background-transparent">
    <ion-buttons slot="start">
      <div class="breadcrumb">
        <a class="breadcrumb__step" href="#">Ruta 1</a>
        <a class="breadcrumb__step" href="#">Ruta 2</a>
        <a class="breadcrumb__step" href="#">Ruta 3</a>
        <a class="breadcrumb__step breadcrumb__step--active">Ruta 4 Activa</a>
      </div>
    </ion-buttons>

    <ion-buttons slot="end">
      <ion-back-button default-href="/home"></ion-back-button>
      Volver
    </ion-buttons>
  </ion-toolbar>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonToolbar, IonButtons, IonBackButton } from '@ionic/vue';

export default defineComponent({
  name: 'BreadCrumb',
  components: {
    IonToolbar,
    IonButtons,
    IonBackButton,
  }
});
</script>

<style scoped>

.box-navbar {
  margin: 0 3px 5px 3px;
}

.background-transparent {
  background-color: transparent !important;
  --background: transparent;
  --ion-color-base: transparent !important;
}

.breadcrumb {
  text-align: center;
  display: inline-block;
  box-shadow: 0 2px 5px rgba(0,0,0,0.25);
  overflow: hidden;
  border-radius: 5px;
  counter-reset: flag;
}
.breadcrumb__step {
  text-decoration: none;
  outline: none;
  display: block;
  float: left;
  font-size: 12px;
  line-height: 36px;
  padding: 0 10px 0 60px;
  position: relative;
  background: var(--breadcrumb-theme-2);
  color: var(--breadcrumb-theme-1);
  transition: background 0.5s;
}
.breadcrumb__step:first-child {
  padding-left: 46px;
  border-radius: 5px 0 0 5px;
}
.breadcrumb__step:first-child::before {
  left: 14px;
}
.breadcrumb__step:last-child {
  border-radius: 0 5px 5px 0;
  padding-right: 20px;
}
.breadcrumb__step:last-child::after {
  content: none;
}
.breadcrumb__step::before {
  content: counter(flag);
  counter-increment: flag;
  border-radius: 100%;
  width: 20px;
  height: 20px;
  line-height: 20px;
  margin: 8px 0;
  position: absolute;
  top: 0;
  left: 30px;
  font-weight: bold;
  background: var(--breadcrumb-theme-2);
  box-shadow: 0 0 0 1px var(--breadcrumb-theme-1);
}
.breadcrumb__step::after {
  content: '';
  position: absolute;
  top: 0;
  right: -18px;
  width: 36px;
  height: 36px;
  transform: scale(0.707) rotate(45deg);
  z-index: 1;
  border-radius: 0 5px 0 50px;
  background: var(--breadcrumb-theme-2);
  transition: background 0.5s;
  box-shadow: 2px -2px 0 2px var(--breadcrumb-theme-3);
}
.breadcrumb__step:hover,
.breadcrumb__step--active,
.breadcrumb__step:hover::after,
.breadcrumb__step--active::after {
  background: var(--breadcrumb-theme-1);
}
.breadcrumb__step:hover,
.breadcrumb__step--active {
  color: var(--breadcrumb-theme-2);
}
.breadcrumb__step:hover::before,
.breadcrumb__step--active::before {
  color: var(--breadcrumb-theme-1);
}
</style>