import { IBasePagination, ISortable } from "models";

export interface IBaseService<T> {
  find(where?: Readonly<T>, pagination?: IBasePagination, sort?: ISortable | ISortable[]): Promise<T[]>;
  findOne(where: Readonly<T>): Promise<T>;
  create(item: T): Promise<T>;
  update(id: string, item: T): Promise<T>;
  destroy(id: string): Promise<boolean>;
}