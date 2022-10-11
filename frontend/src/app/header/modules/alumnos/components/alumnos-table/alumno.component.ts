import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Alumno } from 'src/app/models/alumno';
import {AlumnoService} from '../../../../../services/alumnos/alumno.service';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.scss']
})
export class AlumnoComponent implements OnInit {

  constructor(
    public alumnoService: AlumnoService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.verAlumnos();
  }
  
  verAlumnos() {
    this.alumnoService.getAlumnos().subscribe(
        res => {
          this.alumnoService.alumnos = res;
        },
        err => console.log(err)
    )
  }

  editarAlumno(alumno: Alumno) {
    this.alumnoService.selectAlumno = alumno;
  }

  borrarAlumno(id: string) {
    if (confirm('¿Desea eliminar este alumno?')){
      this.alumnoService.deleteAlumno(id).subscribe(
        (res) => {
          console.log(res);
        },
        (err) => console.error(err) 
        );
      this.msgDelete();
      this.verAlumnos();
    }
  }

  msgDelete(){
    this._snackBar.open('El alumno se ha eliminado correctamente', '', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }
}
