import { IBaseOptions } from "./base.interface";

export class User implements IBaseOptions {
  id: string;
  createdAt?: number | Date;
  updatedAt?: number | Date;

  name: string;
  lastName: string;
  email: string;
}

export interface IInsecureUser extends User {
  password: string;
}