<template>
    <ion-page>
      <ion-content>
        <ion-row>
          <ion-col>
            <!--
            <bread-crumb class="ion-hide-sm-down" :breadcrumbs="breadCrumbs"></bread-crumb>
            -->


            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <h1>Page List</h1>
            <h2>slug: {{slug ?? ''}}</h2>
            <h2>subsección: {{subsection ?? ''}}</h2>

            {{Math.random()}}
            <contents-grid></contents-grid>
          </ion-col>
          
        </ion-row>
      </ion-content>
    </ion-page>
</template>

<script lang="ts">
//import BreadCrumb from '@/components/layouts/BreadCrumb.vue';
import ContentsGrid from '@/components/ContentsGrid.vue';

import { 
  IonCol, 
  IonRow,
  IonContent,
  IonPage,

} from '@ionic/vue';
import { onMounted, ref, watch, } from 'vue';
//import { watch, onUpdated, ref } from 'vue';
import { useRoute } from 'vue-router';

export default({
  name: 'GenericPageListElements',
  components: {
    ContentsGrid,
    IonContent,
    IonCol, 
    IonRow,
    IonPage,
  },
  /*
  data() {
    return {
      subsection: ''
    }
  },
  */
  setup() {
    const route = useRoute();
    const params = ref(route.params);
    //const slug = computed(() => params.value.slug);
    const slug = ref();
    const subsection = ref();

    //https://pastebin.com/j2SCvABn

    const updateData = () => {
      slug.value = route.params.slug;
      subsection.value = route.params.subsection;
      //console.log('Nuevo Slug: ' + params.value.slug);
      //console.log('Nueva Subseccion: ' + params.value.subsection);

      // TODO → Preparar ajax para obtener datos.
      
      return params;
    };

    onMounted(() => updateData());

    watch(useRoute(), () => {
      updateData();
    })

    return {
      params: params,
      slug: slug,
      subsection: subsection,
    };
  },
});
</script>

<style scoped>
.center {
  text-align: center;
}
</style>