import { IBaseOptions } from "./base.interface";
import { IValidable } from "./validable.interface";


export interface IProfileOptions extends IBaseOptions {
  name?: string;
  email?: string;
  isDefault?: boolean;
}

export class Profile implements IBaseOptions, IValidable<IProfileOptions> {
  id?: string;
  createdAt?: number | Date;
  updatedAt?: number | Date;

  name: string;
  email: string;
  isDefault?: boolean;

  constructor(options?: IProfileOptions) {
    Object.assign(this, options);
  }

  get isValid(): boolean {
    return this.requiredFields.every(key => !!this[key]);
  }

  get requiredFields(): (keyof IProfileOptions)[] {
    return ['email', 'name'];
  }

  get currentlyMissing(): (keyof IProfileOptions)[] {
    return this.requiredFields.filter(key => !this[key]);
  }
}
