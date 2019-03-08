import { RouterConfiguration, Router } from 'aurelia-router';
import { ROUTES } from 'routes';

export class App {
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router): void {
    this.router = router;
    config.title = 'TimerX';
    config.map(ROUTES);
  }
}
