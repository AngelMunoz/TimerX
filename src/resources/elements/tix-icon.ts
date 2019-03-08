import { containerless, bindingMode, bindable } from 'aurelia-framework';

@containerless
export class TixIcon {
  @bindable({ defaultBindingMode: bindingMode.toView }) name;
}

