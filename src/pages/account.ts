import { ProfileService, AccountService } from "services";
import { autoinject } from 'aurelia-framework';
import { IProfileOptions, IEmployeeOptions } from "models";

@autoinject
export class Account {

  user: firebase.User;
  profiles: IProfileOptions[] = [];
  activeProfile: IProfileOptions;
  newEmployee: IEmployeeOptions = {};
  constructor(private $profile: ProfileService, private $account: AccountService) { }

  async activate() {
    this.user = this.$account.currentUser;
    this.activeProfile = this.$profile.activeProfile;
    this.profiles = await this.$profile.find();
  }

  async onAddEmployee(e) {
    console.log(this.newEmployee);
  }

}