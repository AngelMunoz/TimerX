import { User } from "models";

export class Home {
  users: User[] = [
    new User({
      id: 'alv',
      name: 'Namezin',
      lastName: 'Apellidin',
      email: 'namezin.apellidin@dominiesin.comesin'
    }),
    new User({
      id: 'alv2',
      name: 'Namezin2',
      lastName: 'Apellidin2',
      email: 'namezin2.apellidin2@dominiesin.comesin'
    })
  ];
  currentUser: User;
  currentDate = new Date();


  selectUser(user: User) {
    this.currentUser = user;
  }
  clicked() {
    console.log(this.currentDate)
  }
}