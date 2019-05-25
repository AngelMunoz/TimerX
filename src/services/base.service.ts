import { IPaginable, ISortable } from "models";

export interface IBaseService<T> {
  find(where?: Readonly<T>, pagination?: IPaginable, sort?: ISortable | ISortable[]): Promise<T[]>;
  findOne(where: Readonly<T>): Promise<T>;
  create(item: T): Promise<T>;
  update(id: string, item: T): Promise<T>;
  destroy(id: string): Promise<boolean>;
}
