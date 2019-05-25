import { bindable, bindingMode } from 'aurelia-framework'
import { Router, NavModel } from 'aurelia-router';

export class TixNavbar {

  @bindable({ defaultBindableMode: bindingMode.toView }) router: Router;
  @bindable({ defaultBindableMode: bindingMode.toView }) authenticated: boolean = false;

  isOpen = false;

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  /**
   * 
   * @param {NavModel} route 
   */
  async navigateTo(route: NavModel | string) {
    if ((route as NavModel).config) {
      await this.router.navigateToRoute((route as NavModel).config.name);
    } else {
      await this.router.navigateToRoute(route as string);
    }
    this.isOpen = false;
  }
}

