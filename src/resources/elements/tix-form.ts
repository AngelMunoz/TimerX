import { autoinject, bindable, bindingMode } from 'aurelia-framework';

@autoinject
export class TixForm {

  @bindable({ defaultBindingMode: bindingMode.toView }) formName: string;
  @bindable({ defaultBindingMode: bindingMode.toView }) submitLabel: string;
  @bindable({ defaultBindingMode: bindingMode.toView }) formTitle: string;

  constructor(private el: Element) { }
  onSubmit(e: Event) {
    e.preventDefault();
    const event = new CustomEvent('on-tix-form-submit', { composed: true, bubbles: true, cancelable: true, });
    this.el.dispatchEvent(event);
  }
}