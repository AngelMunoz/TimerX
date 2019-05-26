import { FireAuth } from "fire.utils";
import { autoinject } from 'aurelia-framework'
import { Router } from 'aurelia-router'
import { AuthService } from "services";
@autoinject
export class SignUp {

  email: string;
  password: string;
  repeatedPassword: string;
  unsubscribe: firebase.Unsubscribe

  constructor(private router: Router, private $auth: AuthService) {
    this.unsubscribe = this.$auth.onAuthStateChanged(user => {
      if (user) {
        this.router.navigateToRoute('home');
      }
    })
  }

  deactivate() {
    this.unsubscribe();
  }

  async signup() {
    await this.$auth.signup(this.email, this.password);
  }
}