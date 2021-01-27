
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
        title: 'Inicio',
        name: 'home',
        url: '/home'
      },
      {
        id: 2,
        title: 'Noticias',
        name: 'posts',
        url: '/posts'
      },
      {
        id: 4,
        title: 'Vídeos',
        name: 'videos',
        sections: [
          {
            id: 1,
            title: 'Lista de Vídeos 1',
            name: 'lista-de-videos-1',
            url: '#'
          },
          {
            id: 2,
            title: 'Lista de Vídeos 2',
            name: 'lista-de-videos-2',
            url: '#'
          },
        ]
      },
      {
        id: 3,
        title: 'Guías',
        name: 'guides',
        sections: [
          {
            id: 18,
            title: 'Listado de Programas',
            name: 'software-list',
            url: '#'
          },
          {
            id: 19,
            title: 'Problemas Solucionados',
            name: 'solve-problems',
            url: '#'
          },
          {
            id: 20,
            title: 'Redes',
            name: 'networks',
            url: '#'
          },
          {
            id: 21,
            title: 'Scripts',
            name: 'scripts',
            url: '#'
          },
          {
            id: 22,
            title: 'Servidores',
            name: 'servers',
            url: '#'
          },
          {
            id: 23,
            title: 'Smartphones',
            name: 'smartphones',
            url: '#'
          },
          {
            id: 24,
            title: 'Terminal',
            name: 'terminal',
            url: '#'
          },
          {
            id: 25,
            title: 'Conceptos',
            name: 'concepts',
            url: '#'
          },
          {
            id: 10,
            title: 'Pentesting',
            name: 'pentesting',
            url: '#'
          },
          {
            id: 11,
            title: 'Servidores',
            name: 'servers',
            url: '#'
          },
          {
            id: 12,
            title: 'Distribuciones',
            name: 'distributions',
            url: '#'
          },
          {
            id: 13,
            title: 'Juegos',
            name: 'games',
            url: '#'
          },
          {
            id: 14,
            title: 'Comandos',
            name: 'commands',
            url: '#'
          },
          {
            id: 15,
            title: 'Alternativas a Programas',
            name: 'alternatives-programs',
            url: '#'
          },
          {
            id: 16,
            title: 'Atajos de Teclado',
            name: 'shortcuts',
            url: '#'
          },
        ]
      },
      {
        id: 5,
        title: 'IOT',
        name: 'iot',
        sections: [
          {
            id: 1,
            title: 'Arduino',
            name: 'arduino',
            url: '#'
          },
          {
            id: 2,
            title: 'Attiny',
            name: 'attiny',
            url: '#'
          },
          {
            id: 3,
            title: 'Componentes',
            name: 'components',
            url: '#'
          },
          {
            id: 4,
            title: 'ESP',
            name: 'esp',
            url: '#'
          },
          {
            id: 5,
            title: 'Impresoras 3D',
            name: '3dprinters',
            url: '#'
          },
          {
            id: 6,
            title: 'Raspberry Pi',
            name: 'raspberry',
            url: '#'
          },
        ]
      },
      {
        id: 8,
        title: 'Hardware',
        name: 'hardware',
        sections: [
          {
            id: 1,
            title: 'Benchmarks',
            name: 'benchmarks',
            url: '#'
          },
          {
            id: 2,
            title: 'Teclados',
            name: 'keyboards',
            url: '#'
          },
        ]
      },
      {
        id: 9,
        title: 'Aplicaciones',
        name: 'software',
        sections: [
          {
            id: 1,
            title: 'Backups',
            name: 'backups',
            url: '#'
          },
          {
            id: 2,
            title: 'Diseño Gráfico',
            name: 'design',
            url: '#'
          },
          {
            id: 3,
            title: 'Editores',
            name: 'editors',
            url: '#'
          },
          {
            id: 4,
            title: 'Editores de Terminal',
            name: 'terminal-editors',
            url: '#'
          },
          {
            id: 5,
            title: 'IDEs',
            name: 'ides',
            url: '#'
          },
          {
            id: 6,
            title: 'Máquinas Virtuales',
            name: 'virtual-machines',
            url: '#'
          },
        ]
      },
      {
        id: 26,
        title: 'Enlaces Amigos',
        name: 'links-friends',
        sections: [
          {
            id: 1,
            title: 'Asociaciones',
            name: 'associations',
            url: '#'
          },
          {
            id: 2,
            title: 'Podcasts',
            name: 'podcasts',
            url: '#'
          },
          {
            id: 3,
            title: 'Canales de Telegram',
            name: 'telegram-channels',
            url: '#'
          },
          {
            id: 4,
            title: 'Blogs',
            name: 'blogs',
            url: '#'
          },
          {
            id: 5,
            title: 'Webs',
            name: 'webs',
            url: '#'
          },
          {
            id: 6,
            title: 'Canales de Youtube',
            name: 'youtube-channels',
            url: '#'
          },
          {
            id: 5,
            title: 'Scripts',
            name: 'scripts',
            url: '#'
          },
          {
            id: 5,
            title: 'Distribuciones',
            name: 'distributions',
            url: '#'
          },
        ]
      },
      {
        id: 17,
        title: 'Cursos',
        name: 'curses',
        sections: [
          {
            id: 1,
            title: 'Iniciación a Linux',
            name: 'backups',
            url: '#'
          },
          {
            id: 2,
            title: 'Editores',
            name: 'design',
            url: '#'
          },
        ]
      },
      {
        id: 6,
        title: 'Apps',
        name: 'apps',
        url: '/apps'
      },
      {
        id: 7,
        title: 'Eventos',
        name: 'events',
        url: '/events'
      },
      {
        id: 27,
        title: 'Contacto',
        name: 'contact',
        url: '/contact'
      },
      {
        id: 28,
        title: 'About',
        name: 'about',
        url: '/about'
      }
    ];

    this.localStorage.setObject('menu', response);
    
    return response;
  }

  /**
   * Comprueba si el menú se encuentra almacenado
   */
  async checkExistLocalStorageMenu() {
    return await this.localStorage.checkExistItem('menu');
    //return await this.localStorage.getItem('menu') ? true : false;
  }

  /**
   * Obtiene el menú desde el storage local.
   */
  private async getMenuFromLocalStorage() {
    return await this.localStorage.getObject('menu');
  }

  /**
   * Obtiene el menú comprobando si está cacheado en local o consultando a su
   * API en para además cachearlo en local
   */
  async getMenu () {
    const menuExpired = false;  // TODO → comprobar tiempo para expirarlo
    let menu: any = null;

    //TODO → Esto es temporal, quitar al implementar la API
    //await this.localStorage.clear();

    const existMenuInCache = await this.localStorage.checkExistItem('menu');

    if (existMenuInCache) {
      menu = await this.getMenuFromLocalStorage();
    }

    if (! menu || menuExpired) {
      console.log('RECARGA MENÚ DESDE API');

      menu = await this.getMenuFromApi();
    }

    return menu;
  }
}