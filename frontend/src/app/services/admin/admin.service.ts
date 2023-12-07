import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {User} from '../../models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  url_api = environment.backend+'/admin'

  selectUser: User = {
    userID: '',
    usuario: '',
    casino: '',
    password: '',
    role: ''
  };
  user!: User[];

  getUser() {
    return this.http.get<User[]>(this.url_api, this.createHeaders());
  }

  addUser(user: User) {
    return this.http.post(this.url_api, user, this.createHeaders());
  }

  deleteUser(id: string) {
    return this.http.delete(`${this.url_api}/${id}`, this.createHeaders());
  }

  createHeaders() {
    return {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('token_login')!
      })
    }
  }

}
