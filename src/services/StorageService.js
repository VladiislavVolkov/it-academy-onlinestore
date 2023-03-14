class StorageService {
  constructor() {
    this.storage = window.localStorage;
  }

  setItem(key, value) {
    try {
      this.storage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  }

  getItem() {}

  removeItem() {}

  clear() {}
}
