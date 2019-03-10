import { bindable } from "aurelia-framework";

export class TixAccordionItem {
  @bindable isOpen = false;

  toggleSection() {
    this.isOpen = !this.isOpen;
  }
}

