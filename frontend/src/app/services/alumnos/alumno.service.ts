import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Alumno} from '../../models/alumno';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  constructor(private http: HttpClient) { }

  url_api = environment.backend+'/alumnos'

  selectAlumno: Alumno = {
    nombre: '',
    rut: '',
    cantidad: 15,
    fecha: ''
  };
  alumnos!: Alumno[];

  getAlumnos() {
    return this.http.get<Alumno[]>(this.url_api, this.createHeaders());
  }

  addAlumno(alumno: Alumno) {
    return this.http.post(this.url_api, alumno, this.createHeaders());
  }

  updateAlumno(alumno: Alumno) {
    return this.http.put(`${this.url_api}/${alumno.id}`, alumno, this.createHeaders());
  }

  deleteAlumno(id: string) {
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
