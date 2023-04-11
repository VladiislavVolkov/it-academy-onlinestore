import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

import { cloudService } from './CloudService';

class AuthService {
  constructor() {
    this.auth = getAuth(cloudService.app);
  }

  signIn(email, password) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  signUp(email, password) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  signOut() {
    return signOut(this.auth);
  }
}

export const authService = new AuthService();
