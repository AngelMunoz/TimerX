import { FrameworkConfiguration } from 'aurelia-framework';
import { PLATFORM } from 'aurelia-pal';
export function configure(config: FrameworkConfiguration) {
  config.globalResources([
    PLATFORM.moduleName('./elements/tix-icon'),
    PLATFORM.moduleName('./elements/tix-navbar'),
    PLATFORM.moduleName('./elements/tix-accordion'),
    PLATFORM.moduleName('./elements/tix-accordion-item'),
    PLATFORM.moduleName('./elements/tix-toolbar'),

    PLATFORM.moduleName('./value-converters/date-input')
  ]);
}
