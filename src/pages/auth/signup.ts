import { FireAuth } from "fire.utils";
import { autoinject } from 'aurelia-framework'
import { Router } from 'aurelia-router'
@autoinject
export class SignUp {

  email: string;
  password: string;
  repeatedPassword: string;
  unsubscribe: firebase.Unsubscribe

  constructor(private router: Router) {
    this.unsubscribe = FireAuth.onAuthStateChanged(user => {
      if (user) {
        router.navigateToRoute('home');
      }
    })
  }

  deactivate() {
    this.unsubscribe();
  }

  async signup() {
    await FireAuth.createUserWithEmailAndPassword(this.email, this.password);
  }
}