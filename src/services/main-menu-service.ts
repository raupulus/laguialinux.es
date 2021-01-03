
// TODO → Esto quizás tenga sentido estar global, se usará en todos los apartados y con más servicios.
import { LocalStorageService } from '@/services/local-storage-service';

export class MainMenuService {
  private menu: any;
  private localStorage: any;

  constructor () {
    this.prepareMenu();
    this.localStorage = LocalStorageService;
  }

  /**
   * Prepara el menú en la variable
   */
  async prepareMenu() {
    if (this.checkExistLocalStorageMenu()) {
      //TODO → TEST tiempo que lleva en caché, si lleva más de X recargar de api
      this.menu = this.getMenuFromLocalStorage();
    } else {
      this.menu = this.getMenuFromApi();
    }
  }

  /**
   * Conecta a la API y descarga el menú de navegación.
   */
  async getMenuFromApi() {

    return [
      {
        id: 1,
        title: 'Inicio'
      },
      {
        id: 2,
        title: 'Noticias'
      },
      {
        id: 2,
        title: 'Guías'
      },
      {
        id: 2,
        title: 'Vídeos'
      },
      {
        id: 2,
        title: 'IOT'
      },
      {
        id: 2,
        title: 'Apps'
      },
      {
        id: 2,
        title: 'Eventos'
      },
      {
        id: 2,
        title: 'Hardware'
      },
      {
        id: 2,
        title: 'Aplicaciones'
      },
      {
        id: 2,
        title: 'Pentesting'
      },
      {
        id: 2,
        title: 'Servidores'
      },
      {
        id: 2,
        title: 'Distribuciones'
      },
      {
        id: 2,
        title: 'Juegos'
      },
      {
        id: 2,
        title: 'Comandos'
      },
      {
        id: 2,
        title: 'Alternativas a Programas'
      },
      {
        id: 2,
        title: 'Atajos de Teclado'
      },
      {
        id: 2,
        title: 'Cursos'
      },
      {
        id: 2,
        title: 'Listado de Programas'
      },
      {
        id: 2,
        title: 'Problemas Solucionados'
      },
      {
        id: 2,
        title: 'Redes'
      },
      {
        id: 2,
        title: 'Scripts'
      },
      {
        id: 2,
        title: 'Servidores'
      },
      {
        id: 2,
        title: 'Smartphones'
      },
      {
        id: 2,
        title: 'Terminal'
      },
      {
        id: 2,
        title: 'Conceptos'
      },
      {
        id: 2,
        title: 'Enlaces Amigos'
      },
      {
        id: 2,
        title: 'Contacto'
      },
      {
        id: 2,
        title: 'About'
      }
    ]
  }

  /**
   * Comprueba si el menú se encuentra almacenado
   */
  async checkExistLocalStorageMenu() {
    return false;
  }

  async getMenuFromLocalStorage() {
    return [
      {
        id: 1,
        title: 'test 1'
      },
      {
        id: 2,
        title: 'test 2'
      }
    ]
  }

  async getMenu () {
    return this.getMenuFromApi();
    //return this.menu;
  }
}