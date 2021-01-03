
// TODO → Esto quizás tenga sentido estar global, se usará en todos los apartados y con más servicios.
import { LocalStorageService } from '@/services/local-storage-service';

export class MainMenuService {
  private localStorage = new LocalStorageService();

  /**
   * Conecta a la API y descarga el menú de navegación.
   */
  private async getMenuFromApi() {

    const response = [
      {
        id: 1,
        title: 'Inicio'
      },
      {
        id: 2,
        title: 'Noticias'
      },
      {
        id: 3,
        title: 'Guías'
      },
      {
        id: 4,
        title: 'Vídeos'
      },
      {
        id: 5,
        title: 'IOT'
      },
      {
        id: 6,
        title: 'Apps'
      },
      {
        id: 7,
        title: 'Eventos'
      },
      {
        id: 8,
        title: 'Hardware'
      },
      {
        id: 9,
        title: 'Aplicaciones'
      },
      {
        id: 10,
        title: 'Pentesting'
      },
      {
        id: 11,
        title: 'Servidores'
      },
      {
        id: 12,
        title: 'Distribuciones'
      },
      {
        id: 13,
        title: 'Juegos'
      },
      {
        id: 14,
        title: 'Comandos'
      },
      {
        id: 15,
        title: 'Alternativas a Programas'
      },
      {
        id: 16,
        title: 'Atajos de Teclado'
      },
      {
        id: 17,
        title: 'Cursos'
      },
      {
        id: 18,
        title: 'Listado de Programas'
      },
      {
        id: 19,
        title: 'Problemas Solucionados'
      },
      {
        id: 20,
        title: 'Redes'
      },
      {
        id: 21,
        title: 'Scripts'
      },
      {
        id: 22,
        title: 'Servidores'
      },
      {
        id: 23,
        title: 'Smartphones'
      },
      {
        id: 24,
        title: 'Terminal'
      },
      {
        id: 25,
        title: 'Conceptos'
      },
      {
        id: 26,
        title: 'Enlaces Amigos'
      },
      {
        id: 27,
        title: 'Contacto'
      },
      {
        id: 28,
        title: 'About'
      }
    ];

    this.localStorage.setItem('menu', response);
    return response;
  }

  /**
   * Comprueba si el menú se encuentra almacenado
   */
  async checkExistLocalStorageMenu() {
    return await this.localStorage.getItem('menu') ? true : false;
  }

  /**
   * Obtiene el menú desde el storage local.
   */
  private async getMenuFromLocalStorage() {
    return await this.localStorage.getItem('menu');
  }

  /**
   * Obtiene el menú comprobando si está cacheado en local o consultando a su
   * API en para además cachearlo en local
   */
  async getMenu () {
    await this.localStorage.clear();

    let menu: any = await this.localStorage.getItem('menu');

    if (menu) {
      //TODO → TEST tiempo que lleva en caché, si lleva más de X recargar de api
      menu = await this.getMenuFromLocalStorage();
    } else {
      menu = await this.getMenuFromApi();
    }

    return menu;

    /*
    Promise.resolve(this.menu).then(function(menu) {
      console.log(menu);
      return menu;
    })
    */
  }
}