import { FireAuth } from 'fire.utils';
import { autoinject } from 'aurelia-framework';
import { Router } from 'aurelia-router';

@autoinject
export class Login {

  email: string;
  password: string;
  unsubscribe: firebase.Unsubscribe;

  constructor(private router: Router) {
    this.unsubscribe = FireAuth.onAuthStateChanged(user => {
      if (user) {
        router.navigateToRoute('home');
      }
    });
  }
  deactivate() {
    this.unsubscribe();
  }

  async login() {
    try {
      await FireAuth.signInWithEmailAndPassword(this.email, this.password)
    } catch (error) {
      console.warn(error.message);
      return;
    }
  }
}