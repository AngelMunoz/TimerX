import { FireAuth } from "fire.utils";

export class AccountService {

  verifyMainProfileEmail() {
    return FireAuth.currentUser.sendEmailVerification();
  }

  updateMainProfile(profile: { displayName?: string, photoUrl?: string }) {
    return FireAuth.currentUser.updateProfile(profile)
  }

  get currentUser(): firebase.User {
    return FireAuth.currentUser;
  }
}