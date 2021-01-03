<template>
  <ion-header>
    <ion-toolbar color="dark">
      <ion-row class="ion-hide-sm-up">
        <ion-col>
          <ion-buttons>
            <ion-menu-button menuToggle="main-menu"></ion-menu-button>
          </ion-buttons>
        </ion-col>

        <ion-col>
          <ion-title>
            <ion-back-button default-href="/home"></ion-back-button>
            (logo)
          </ion-title>
        </ion-col>

        <ion-col>
          Input - Buscar
        </ion-col>
      </ion-row>

      <ion-row class="ion-hide-sm-down">
        <ion-col class="center">
          <ion-title size="large">
            <ion-img src="/img/logo/logo-60x60.png" 
            style="width: 60px;" class="inline-block"></ion-img>
            <ion-img src="/img/logo/laguialinux-text-red.png" 
            style="width: 500px;" class="inline-block"></ion-img>
          </ion-title>
        </ion-col>
      </ion-row>

      <ion-row class="ion-hide-sm-down">
        <ion-col class="center">
            <ion-button color="primary" 
                        v-for="element in menu" 
                        :key="element.id"
            >
              {{ element.title }}
            </ion-button>
        </ion-col>
        
        <!--
        <ion-col class="center">
            <ion-button color="secondary">Inicio</ion-button>
            <ion-button color="primary">Noticias</ion-button>
            <ion-button color="primary">Guías</ion-button>
            <ion-button color="primary">Vídeos</ion-button>
            <ion-button color="primary">IOT</ion-button>
            <ion-button color="primary">Apps</ion-button>
            <ion-button color="primary">Eventos</ion-button>
            <ion-button color="primary">Hardware</ion-button>
            <ion-button color="primary">Aplicaciones</ion-button>
            <ion-button color="primary">Pentesting</ion-button>
            <ion-button color="primary">Servidores</ion-button>
            <ion-button color="primary">Distribuciones</ion-button>
            <ion-button color="primary">Juegos</ion-button>
            <ion-button color="primary">Comandos</ion-button>
            <ion-button color="primary">Alternativas a Programas</ion-button>
            <ion-button color="primary">Atajos de Teclado</ion-button>
            <ion-button color="primary">Cursos</ion-button>
            <ion-button color="primary">Listado de Programas</ion-button>
            <ion-button color="primary">Problemas Solucionados</ion-button>
            <ion-button color="primary">Redes</ion-button>
            <ion-button color="primary">Scripts</ion-button>
            <ion-button color="primary">Servidores</ion-button>
            <ion-button color="primary">Smartphones</ion-button>
            <ion-button color="primary">Terminal</ion-button>
            <ion-button color="primary">Conceptos</ion-button>

            <ion-button color="primary" @click="setOpen(true, $event)">
              Enlaces Amigos
            </ion-button>
            <ion-popover
              :is-open="isOpenRef"
              css-class="my-custom-class"
              :event="event"
              :translucent="true"
              @onDidDismiss="setOpen(false)"
            >
              <ion-list>
                <ion-item>
                  <ion-avatar slot="start">
                    <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y">
                  </ion-avatar>
                  <ion-label>
                    <ion-button color="danger" expand="full" size="large">
                      Asociaciones
                      </ion-button>
                    </ion-label>
                </ion-item>

                <ion-item>
                  <ion-avatar slot="start">
                    <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y">
                  </ion-avatar>
                  <ion-label>
                    <ion-button color="danger" expand="full" size="large">
                      Podcasts
                      </ion-button>
                    </ion-label>
                </ion-item>
                
                <ion-item>
                  <ion-avatar slot="start">
                    <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y">
                  </ion-avatar>
                  <ion-label>
                    <ion-button color="danger" expand="full" size="large">
                      Canales de Telegram
                      </ion-button>
                    </ion-label>
                </ion-item>

                <ion-item>
                  <ion-avatar slot="start">
                    <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y">
                  </ion-avatar>
                  <ion-label>
                    <ion-button color="danger" expand="full" size="large">
                      Blogs
                      </ion-button>
                    </ion-label>
                </ion-item>

                <ion-item>
                  <ion-avatar slot="start">
                    <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y">
                  </ion-avatar>
                  <ion-label>
                    <ion-button color="danger" expand="full" size="large">
                      Webs
                      </ion-button>
                    </ion-label>
                </ion-item>

                <ion-item>
                  <ion-avatar slot="start">
                    <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y">
                  </ion-avatar>
                  <ion-label>
                    <ion-button color="danger" expand="full" size="large">
                      Canales de Youtube
                      </ion-button>
                    </ion-label>
                </ion-item>

                <ion-item>
                  <ion-avatar slot="start">
                    <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y">
                  </ion-avatar>
                  <ion-label>
                    <ion-button color="danger" expand="full" size="large">
                      Scripts
                      </ion-button>
                    </ion-label>
                </ion-item>

                <ion-item>
                  <ion-avatar slot="start">
                    <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y">
                  </ion-avatar>
                  <ion-label>
                    <ion-button color="danger" expand="full" size="large">
                      Distribuciones
                      </ion-button>
                    </ion-label>
                </ion-item>
                
              </ion-list>
            </ion-popover>

            <ion-button color="primary">Contacto</ion-button>

            <ion-button color="primary">About</ion-button>
        </ion-col>
        -->
      </ion-row>

    </ion-toolbar>

    <bread-crumb class="ion-hide-sm-down"></bread-crumb>
  </ion-header>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { IonButton } from '@ionic/vue';
import BreadCrumb from '@/components/layouts/BreadCrumb.vue';
import { MainMenuService } from '@/services/main-menu-service';


export default defineComponent({
  name: 'NavBar',
  components: {
    IonButton, 
    BreadCrumb,
  },
  data() {
    return {
      menu: [{}]
    }
  },
  setup() {
    const isOpenRef = ref(false);
    const event = ref();
    const setOpen = (state: boolean, event?: Event) => {
      //event.value = event; 
      isOpenRef.value = state;
    }
    return { isOpenRef, setOpen, event }
  },
  beforeCreate() {
    new MainMenuService().getMenu().then((response) => {
      this.menu = response;
    });
  },

  methods: {
    
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
</style>
