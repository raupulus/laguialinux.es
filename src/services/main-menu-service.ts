
// TODO → Esto quizás tenga sentido estar global, se usará en todos los apartados y con más servicios.
import { LocalStorageService } from '@/services/local-storage-service';

export class MainMenuService {
  private menu: [] = [];

  constructor ( private storage: LocalStorageService) {
    this.prepareMenu();
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
      'Menú 1',
      'Menú 2'
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
      'Menú 1',
      'Menú 2'
    ]
  }

  async getMenu () {
    return this.menu;
  }
}