import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Alumno} from '../../models/alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  constructor(private http: HttpClient) { }

  url_api = 'http://localhost:4000/alumnos'

  selectAlumno: Alumno = {
    nombre: '',
    rut: '',
    cantidad: 15,
    fecha: ''
  };
  alumnos!: Alumno[];

  getAlumnos() {
    return this.http.get<Alumno[]>(this.url_api);
  }

  addAlumno(alumno: Alumno) {
    return this.http.post(this.url_api, alumno);
  }

  updateAlumno(alumno: Alumno) {
    return this.http.put(`${this.url_api}/${alumno.id}`, alumno);
  }

  deleteAlumno(id: string) {
    return this.http.delete(`${this.url_api}/${id}`);
  }
}
