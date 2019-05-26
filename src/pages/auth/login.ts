import { autoinject } from 'aurelia-framework';
import { Router } from 'aurelia-router';
import { AuthService } from 'services';

@autoinject
export class Login {

  email: string;
  password: string;
  unsubscribe: firebase.Unsubscribe;

  constructor(private router: Router, private $auth: AuthService) {
    this.unsubscribe = this.$auth.onAuthStateChanged(user => {
      if (user) {
        this.router.navigateToRoute('home');
      }
    });
  }
  deactivate() {
    this.unsubscribe();
  }

  async login() {
    try {
      await this.$auth.login(this.email, this.password);
    } catch (error) {
      console.warn(error.message);
      return;
    }
  }
}