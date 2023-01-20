import {makeAutoObservable} from 'mobx';

class Auth {
  isAuthorizated = false;

  constructor() {
    makeAutoObservable(this);
  }

  ToAuthorize() {
    this.isAuthorizated = true;
    console.log(this.isAuthorizated);
  }
  ToLogout() {
    this.isAuthorizated = false;
    console.log(this.isAuthorizated);
  }
}

export default new Auth();
