import { bindable, bindingMode } from 'aurelia-framework'
import { Router, NavModel } from 'aurelia-router';

export class TixNavbar {

  @bindable({ defaultBindableMode: bindingMode.toView }) router: Router;

  isOpen = false;

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  /**
   * 
   * @param {NavModel} route 
   */
  async navigateTo(route: NavModel) {
    await this.router.navigateToRoute(route.config.name);
    this.isOpen = false;
  }
}

