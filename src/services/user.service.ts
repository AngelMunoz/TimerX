import { IBaseService } from "./base.service";
import { User, IPaginable, ISortable, IUserOptions } from "models";

export class UserService implements IBaseService<User> {

  find(where?: Readonly<User>, pagination?: IPaginable, sort?: ISortable | ISortable[]): Promise<User[]> {
    throw new Error("Method not implemented.");
  }

  findOne(where: Readonly<User>): Promise<User> {
    throw new Error("Method not implemented.");
  }

  create(item: User): Promise<User> {
    throw new Error("Method not implemented.");
  }

  update(id: string, item: User): Promise<User> {
    throw new Error("Method not implemented.");
  }

  destroy(id: string): Promise<boolean> {
    throw new Error("Method not implemented.");
  }

  get activeuser(): IUserOptions {
    throw new Error("Method not implemented.");
  }

  set activeuser(user: IUserOptions) {
    throw new Error("Method not implemented.");
  }
}