
// TODO → Esto quizás tenga sentido estar global, se usará en todos los apartados y con más servicios.
import { LocalStorageService } from '@/services/local-storage-service';
import { MenuCollection } from '../interfaces/menu-interface';

export class MainMenuService {
  private localStorage = new LocalStorageService();
  public menu: MenuCollection[] = [];

  /**
   * Conecta a la API y descarga el menú de navegación.
   */
  private async getMenuFromApi() {


    const response = [
      {
        id: 1,
        title: 'Inicio',
        name: 'home',
        group: '',
        template: 'generic'
      },
      {
        id: 2,
        title: 'Noticias',
        name: 'posts',
        group: 'section',
        template: 'generic'
      },
      {
        id: 4,
        title: 'Vídeos',
        name: 'videos',
        group: 'section',
        template: 'generic',
        sections: [
          {
            id: 1,
            title: 'Lista de Vídeos 1',
            name: 'lista-de-videos-1',
          },
          {
            id: 2,
            title: 'Lista de Vídeos 2',
            name: 'lista-de-videos-2',
          },
        ]
      },
      {
        id: 3,
        title: 'Guías',
        name: 'guides',
        group: 'section',
        template: 'generic',
        sections: [
          {
            id: 18,
            title: 'Listado de Programas',
            name: 'software-list',
          },
          {
            id: 19,
            title: 'Problemas Solucionados',
            name: 'solve-problems',
          },
          {
            id: 20,
            title: 'Redes',
            name: 'networks',
          },
          {
            id: 21,
            title: 'Scripts',
            name: 'scripts',
          },
          {
            id: 22,
            title: 'Servidores',
            name: 'servers',
          },
          {
            id: 23,
            title: 'Smartphones',
            name: 'smartphones',
          },
          {
            id: 24,
            title: 'Terminal',
            name: 'terminal',
          },
          {
            id: 25,
            title: 'Conceptos',
            name: 'concepts',
          },
          {
            id: 10,
            title: 'Pentesting',
            name: 'pentesting',
          },
          {
            id: 11,
            title: 'Servidores',
            name: 'servers',
          },
          {
            id: 12,
            title: 'Distribuciones',
            name: 'distributions',
          },
          {
            id: 13,
            title: 'Juegos',
            name: 'games',
          },
          {
            id: 14,
            title: 'Comandos',
            name: 'commands',
          },
          {
            id: 15,
            title: 'Alternativas a Programas',
            name: 'alternatives-programs',
          },
          {
            id: 16,
            title: 'Atajos de Teclado',
            name: 'shortcuts',
          },
        ]
      },
      {
        id: 5,
        title: 'IOT',
        name: 'iot',
        group: 'section',
        template: 'generic',
        sections: [
          {
            id: 1,
            title: 'Arduino',
            name: 'arduino',
          },
          {
            id: 2,
            title: 'Attiny',
            name: 'attiny',
          },
          {
            id: 3,
            title: 'Componentes',
            name: 'components',
          },
          {
            id: 4,
            title: 'ESP',
            name: 'esp',
          },
          {
            id: 5,
            title: 'Impresoras 3D',
            name: '3dprinters',
          },
          {
            id: 6,
            title: 'Raspberry Pi',
            name: 'raspberry',
          },
        ]
      },
      {
        id: 8,
        title: 'Hardware',
        name: 'hardware',
        group: 'section',
        template: 'generic',
        sections: [
          {
            id: 1,
            title: 'Benchmarks',
            name: 'benchmarks',
          },
          {
            id: 2,
            title: 'Teclados',
            name: 'keyboards',
          },
        ]
      },
      {
        id: 9,
        title: 'Aplicaciones',
        name: 'software',
        group: 'section',
        template: 'generic',
        sections: [
          {
            id: 1,
            title: 'Backups',
            name: 'backups',
          },
          {
            id: 2,
            title: 'Diseño Gráfico',
            name: 'design',
          },
          {
            id: 3,
            title: 'Editores',
            name: 'editors',
          },
          {
            id: 4,
            title: 'Editores de Terminal',
            name: 'terminal-editors',
          },
          {
            id: 5,
            title: 'IDEs',
            name: 'ides',
          },
          {
            id: 6,
            title: 'Máquinas Virtuales',
            name: 'virtual-machines',
          },
        ]
      },
      {
        id: 26,
        title: 'Enlaces Amigos',
        name: 'links-friends',
        group: 'section',
        template: 'generic',
        sections: [
          {
            id: 1,
            title: 'Asociaciones',
            name: 'associations',
          },
          {
            id: 2,
            title: 'Podcasts',
            name: 'podcasts',
          },
          {
            id: 3,
            title: 'Canales de Telegram',
            name: 'telegram-channels',
          },
          {
            id: 4,
            title: 'Blogs',
            name: 'blogs',
          },
          {
            id: 5,
            title: 'Webs',
            name: 'webs',
          },
          {
            id: 6,
            title: 'Canales de Youtube',
            name: 'youtube-channels',
          },
          {
            id: 5,
            title: 'Scripts',
            name: 'scripts',
          },
          {
            id: 5,
            title: 'Distribuciones',
            name: 'distributions',
          },
        ]
      },
      {
        id: 17,
        title: 'Cursos',
        name: 'curses',
        group: 'section',
        template: 'generic',
        sections: [
          {
            id: 1,
            title: 'Iniciación a Linux',
            name: 'backups',
          },
          {
            id: 2,
            title: 'Editores',
            name: 'design',
          },
        ]
      },
      {
        id: 6,
        title: 'Apps',
        name: 'apps',
        group: 'section',
        template: 'generic'
      },
      {
        id: 7,
        title: 'Eventos',
        name: 'events',
        group: 'section',
        template: 'generic'
      },
      {
        id: 27,
        title: 'Contacto',
        name: 'contact',
        group: 'section',
        template: 'generic'
      },
      {
        id: 28,
        title: 'About',
        name: 'about',
        group: 'section',
        template: 'generic',
      }
    ];

    this.localStorage.setObject('menu', response);
    this.localStorage.setItem('menu_created_at', Date.now().toString());
    
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
   * Comprueba si ha expirado el tiempo de almacenamiento en local.
   * 
   * 5 minutos = 300 segundos = 300000 milisegundos
   * 
   */
  private async checkExpireLocalStorageMenu() {
    const dateSaved = await this.localStorage.getItem('menu_created_at');

    if (dateSaved && dateSaved.length) {
      const now: number = parseInt(Date.now().toString());
      const old: number = parseInt(dateSaved.toString());

      return (now - old) > 300000;
    }

    return true;
  }

  /**
   * Obtiene el menú comprobando si está cacheado en local o consultando a su
   * API en para además cachearlo en local
   */
  async getMenu () {
    const existMenuInCache = await this.localStorage.checkExistItem('menu');
    const menuExpired = await this.checkExpireLocalStorageMenu();

    //TODO → Esto es temporal, quitar al implementar la API
    //await this.localStorage.clear();

    // Comprueba si ha pasado el tiempo en el que es válido el caché
    if (existMenuInCache) {
      this.menu = await this.getMenuFromLocalStorage();
    }

    if (! this.menu || menuExpired) {
      console.log('RECARGA MENÚ DESDE API');

      this.menu = await this.getMenuFromApi();
    }

    return this.menu;
  }
}