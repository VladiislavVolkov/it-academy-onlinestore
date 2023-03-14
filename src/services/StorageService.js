import { APP_EVENTS } from '../constants/appEvents';
import { eventEmitter } from '../core/eventEmitter';

class StorageService {
  constructor() {
    this.storage = window.localStorage;
  }

  setItem(key, value) {
    try {
      this.storage.setItem(key, JSON.stringify(value));
      eventEmitter.emit(APP_EVENTS.storage, { data: this.getItem(key) });
    } catch (error) {
      console.error(error);
    }
  }

  getItem(key) {
    try {
      return JSON.parse(this.storage.getItem(key));
    } catch (error) {
      console.error(error);
    }
  }

  removeItem(key) {
    this.storage.removeItem(key);
    eventEmitter.emit(APP_EVENTS.storage, { data: this.getItem(key) });
  }

  clear() {
    this.storage.clear();
    eventEmitter.emit(APP_EVENTS.storage, { data: null });
  }
}

export const storageService = new StorageService();
