import { IBaseOptions } from "./base.interface";
import { IProfileOptions } from "./profile.model";
import { IValidable } from "./validable.interface";

export interface IEmployeeOptions extends IBaseOptions {
  name?: string
  lastName?: string;
  email?: string;
  // relationship
  belongsToProfile?: string;
  belongsToUser?: string;
}


export class Employee implements IBaseOptions, IValidable<IEmployeeOptions> {
  id?: string;
  createdAt?: number | Date;
  updatedAt?: number | Date;

  name: string
  lastName: string;
  email: string;

  // relationships
  belongsToProfile?: string;
  belongsToUser?: string;

  constructor(options?: IEmployeeOptions) {
    Object.assign(this, options);
  }

  get fullName() {
    return `${this.name} ${this.lastName}`;
  }

  get isValid(): boolean {
    return this.requiredFields.every(key => !!this[key]);
  }

  get requiredFields(): (keyof IEmployeeOptions)[] {
    return ['email', 'name', 'lastName'];
  }

  get currentlyMissing(): (keyof IEmployeeOptions)[] {
    return this.requiredFields.filter(key => !this[key]);
  }
}