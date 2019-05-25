import { FireAuth } from 'fire.utils';
import { PipelineStep, Redirect } from 'aurelia-router'

export class AuthorizeStep implements PipelineStep {

  async run(navigationInstruction, next) {
    const isLoggedIn = !!FireAuth.currentUser;
    // currently active route config
    const currentRoute = navigationInstruction.config;

    // settings object will be preserved during navigation
    const loginRequired = currentRoute.settings && currentRoute.settings.auth;

    if (!isLoggedIn && loginRequired) {
      return next.cancel(new Redirect('login'));
    }
    return next();
  }

}