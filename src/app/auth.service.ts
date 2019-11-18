import { Injectable } from '@angular/core';
import { longStackSupport } from 'q';
import { Loginuser } from './loginuser';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  public login(userInfo:Loginuser)
  {
    localStorage.setItem('ACCESS_TOKEN',"access_token");
  }
 
  public isLoggedin()
  {
    return localStorage.getItem('ACCESS_TOKEN') !==null;
  }
 
  public logout()
  {
    localStorage.removeItem('ACCESS_TOKEN');
  }
}
