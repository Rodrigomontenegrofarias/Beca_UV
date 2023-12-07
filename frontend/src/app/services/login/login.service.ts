import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from '../../models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  url_api = environment.backend+'/login'

  loginUser(user: User) {
    return this.http.post(this.url_api, user);
  }

  //Oculta elementos del menú si no está logueado
  isLogged(): boolean{
    return localStorage.getItem('token_login') ? true : false;
  }

  //Oculta elementos y botones si no es Administrador
  rolesAccess(): boolean{
    let role = localStorage.getItem('role');
    if (role === 'Administrador') {
      return true;
    } else {
      return false;
    }
  }
}
