import { IBaseOptions } from "./base.interface";


export interface IUserOptions extends IBaseOptions {
  name?: string;
  lastName?: string;
  email?: string;
}

export class User implements IBaseOptions {
  id: string;
  createdAt?: number | Date;
  updatedAt?: number | Date;

  name: string;
  lastName: string;
  email: string;

  constructor(options?: IUserOptions) {
    Object.assign(this, options);
  }

  get fullName() {
    return `${this.name} ${this.lastName}`;
  }
}

export interface IInsecureUser extends User {
  password: string;
}