import { autoinject } from 'aurelia-framework';
import { Employee, IEmployeeOptions } from "models";
import { ProfileService, EmployeeService, AuthService, AccountService } from 'services';
import { camelCaseToWordsUppercase } from 'utils';
import { FireApp } from 'fire.utils';

@autoinject
export class Home {
  employees: Employee[] = [];
  selectedEmployee: Employee;
  currentDate = new Date();
  newEmployee: IEmployeeOptions = {};

  constructor(private $profiles: ProfileService, private $employees: EmployeeService, private $account: AccountService) { }

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
    employee.belongsToProfile = this.$profiles.activeProfile.id;
    employee.belongsToUser = (this.$account.currentUser as any).uid;
    await this.$employees.create(employee);
    this.employees = await this.$employees.find();
    this.newEmployee = {};
  }
}