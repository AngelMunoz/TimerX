import { IBaseOptions } from "./base.interface";
import { User } from "./User";

export class Employee implements IBaseOptions {
  id: string;
  createdAt?: number | Date;
  updatedAt?: number | Date;

  name: string
  lastName: string;
  email: string;

  // relationships
  belongsTo?: string | User;
}