import { initializeApp } from 'firebase/app';

class CloudService {
  constructor() {
    this._config = {
      apiKey: process.env.API_KEY,
      authDomain: 'it-shop-7062d.firebaseapp.com',
      projectId: 'it-shop-7062d',
      storageBucket: 'it-shop-7062d.appspot.com',
      messagingSenderId: '447302272424',
      appId: '1:447302272424:web:0a06626da26f4af59d899d',
    };
    this.app = initializeApp(this._config);
  }
}

export const cloudService = new CloudService();
