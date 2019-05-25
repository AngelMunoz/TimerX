import { RouterConfiguration, Router } from 'aurelia-router';
import { ROUTES } from 'routes';
import { AuthorizeStep } from 'AuthorizeStep';
import { FireAuth } from 'fire.utils';

export class App {
  router: Router;
  private _isAuthenticated = false;
  unsubscribe: firebase.Unsubscribe;
  constructor() {
    this.unsubscribe = FireAuth.onAuthStateChanged(this.onAuthChanged.bind(this));
  }

  get isAuthenticated() {
    return this._isAuthenticated;
  }

  onAuthChanged(user: firebase.User) {
    this._isAuthenticated = !!user;
  }

  deactivate() {
    this.unsubscribe();
  }

  configureRouter(config: RouterConfiguration, router: Router): void {
    this.router = router;
    config.title = 'TimerX';
    config.options.pushState = true;
    config.addAuthorizeStep(AuthorizeStep)
    config.map(ROUTES);
  }
}
