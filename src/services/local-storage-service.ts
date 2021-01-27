import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;

export class LocalStorageService {
  private storage: any;

  constructor () {
    this.storage = Storage;
  }

  /**
   * Guarda un objeto en el Storage Local.
   * @param key Recibe la clave del elemento a borrar.
   * @param object Recibe el objeto que será guardado en el almacenamiento.
   */  
  async setObject (key: string, object: object) {
    return await Storage.set({
      key: key,
      value: JSON.stringify(object)
    });
  }
  
  /**
   * Devuelve un objeto almacenado en el storage local.
   * @param key Recibe la clave del elemento a borrar.
   */
  async getObject (key: string) {
    const ret = await Storage.get({ key: key });

    return ret && ret.value ? JSON.parse(ret.value) : null
  }

  /**
   * Almacena un elemento recibido como texto plano.
   * 
   * @param key Recibe la clave del elemento a borrar.
   * @param value Una cadena de texto con el valor a guardar.
   */
  async setItem (key: string, value: string) {
    return await Storage.set({
      key: key,
      value: value
    });
  }
 
  /**
   * Devuelve un elemento del storage.
   * @param key Recibe la clave del elemento a borrar.
   */
  async getItem (key: string) {
    const item = await Storage.get({ key: key });

    if (item) {
      return item.value;
    }

    return null;
  }

  /**
   * Comprueba si un elemento está seteado en caché.
   * 
   * @param key Recibe la clave del elemento a buscar.
   */
  async checkExistItem(key: string) {
    const cacheKeys = await Storage.keys();

    return cacheKeys.keys.includes(key) ? true : false
  }
  
  /**
   * Elimina una entrada en el registro de almacenamiento local.
   * @param key Recibe la clave del elemento a borrar.
   */
  async removeItem (key: string) {
    await Storage.remove({ key: key });
  }

  /**
   * Devuelve todas las keys almacenadas en el storage.
   */
  async keys () {
    return await Storage.keys();
  }
  
  /**
   * Limpia el storage completo.
   */
  async clear () {
    await Storage.clear();
  }
}