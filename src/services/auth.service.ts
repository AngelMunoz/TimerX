import { FireAuth } from "fire.utils";

export class AuthService {

  onAuthStateChanged(next, error?, completed?) {
    return FireAuth.onAuthStateChanged(next, error, completed);
  }

  login(email, password) {
    return FireAuth.signInWithEmailAndPassword(email, password);
  }

  signup(email, password) {
    return FireAuth.createUserWithEmailAndPassword(email, password);
  }

  resetPassword(email) {
    return FireAuth.sendPasswordResetEmail(email);
  }

  confirmPasswordReset(token, newPassword) {
    return FireAuth.confirmPasswordReset(token, newPassword);
  }
}