import { IBaseService } from "./base.service";
import { Employee, IPaginable, ISortable } from "models";

export class EmployeeService implements IBaseService<Employee> {

  find(where?: Readonly<Employee>, pagination?: IPaginable, sort?: ISortable | ISortable[]): Promise<Employee[]> {
    throw new Error("Method not implemented.");
  }

  findOne(where: Readonly<Employee>): Promise<Employee> {
    throw new Error("Method not implemented.");
  }

  create(item: Employee): Promise<Employee> {
    throw new Error("Method not implemented.");
  }

  update(id: string, item: Employee): Promise<Employee> {
    throw new Error("Method not implemented.");
  }

  destroy(id: string): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
}
