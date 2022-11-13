import { Injectable } from '@angular/core';
import { AuthModel } from './auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authUsers:AuthModel[] = [
    { userName:'ayyappa@gmail.com', password: '123', isAdmin: false,uName:'Ayyappa' },
    { userName:'admin@gmail.com', password: '12345', isAdmin: true ,uName:'Admin'}
  ];

  verifyCredetials(authModel:AuthModel): boolean{
    let index = this.authUsers.findIndex(x => x.userName ==authModel.userName && x.password == authModel.password);
    if (index >= 0) {
      return true;
    }
    else {
      return false;
    }
  }
  checkAdmin(userName: string): boolean{
    let index = this.authUsers.findIndex(x => x.userName == userName && x.isAdmin == true)
    if (index >= 0) {
      return true;
    }
    else {
      return false;
    }
}
  //constructor() { }
}
