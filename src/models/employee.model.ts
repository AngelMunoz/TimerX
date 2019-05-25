import { IBaseOptions } from "./base.interface";
import { IUserOptions } from "./user.model";
import { IValidable } from "./validable.interface";

export interface IEmployeeOptions extends IBaseOptions {
  name?: string
  lastName?: string;
  email?: string;
  // relationship
  belongsTo?: string | IUserOptions;
}


export class Employee implements IBaseOptions, IValidable<IEmployeeOptions> {
  id?: string;
  createdAt?: number | Date;
  updatedAt?: number | Date;

  name: string
  lastName: string;
  email: string;

  // relationships
  belongsTo?: string | IUserOptions;

  constructor(options?: IUserOptions) {
    Object.assign(this, options);
  }

  get fullName() {
    return `${this.name} ${this.lastName}`;
  }

  get isValid(): boolean {
    return this.requiredFields.every(key => !!this[key]);
  }

  get requiredFields(): ("name" | "lastName" | "email" | "belongsTo" | "id" | "createdAt" | "updatedAt")[] {
    return ['email', 'name', 'lastName'];
  }

  get currentlyMissing(): ("name" | "lastName" | "email" | "belongsTo" | "id" | "createdAt" | "updatedAt")[] {
    return this.requiredFields.filter(key => !this[key]);
  }
}