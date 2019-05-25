import { autoinject } from 'aurelia-framework';
import { Employee, IEmployeeOptions } from "models";
import { UserService, EmployeeService } from 'services';
import { camelCaseToWordsUppercase } from 'utils';

@autoinject
export class Home {
  employees: Employee[] = [];
  selectedEmployee: Employee;
  currentDate = new Date();
  newEmployee: IEmployeeOptions = {};

  constructor(private $users: UserService, private $employees: EmployeeService) { }

  async activate() {
    try {
      this.employees = await this.$employees.find();
    } catch (error) {
      console.warn(error.message);
      this.employees = [];
    }
  }

  selectEmployee(employee: Employee) {
    this.selectedEmployee = employee;
  }

  async onAddEmployee(e: CustomEvent) {
    const employee = new Employee(this.newEmployee);
    if (!employee.isValid) {
      // let user know we're missing inputs
      console.log(employee.currentlyMissing.map(camelCaseToWordsUppercase));
      return;
    }
    employee.belongsTo = this.$users.activeuser.id;
    await this.$employees.create(employee);
    this.employees = await this.$employees.find();
    this.newEmployee = {};
  }
}