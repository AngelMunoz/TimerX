import { bindingMode, bindable } from 'aurelia-framework';

export class TixIcon {
  @bindable({ defaultBindingMode: bindingMode.toView }) name;
}

