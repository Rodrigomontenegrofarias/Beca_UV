import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  url_api = 'http://localhost:4000/login'

  loginUser(user: User) {
    return this.http.post(this.url_api, user);
  }

  isLogged(): boolean{
    return localStorage.getItem('token_login') ? true : false;
  }

  rolesAccess(): boolean{
    const role = localStorage.getItem('role');
    if (role === 'admin') {
      return true;
    } else {
      return false;
    }
  }
}
