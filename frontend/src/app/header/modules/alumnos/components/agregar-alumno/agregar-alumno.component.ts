import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlumnoService } from '../../../../../services/alumnos/alumno.service'

@Component({
  selector: 'app-agregar-alumno',
  templateUrl: './agregar-alumno.component.html',
  styleUrls: ['./agregar-alumno.component.scss']
})
export class AgregarAlumnoComponent implements OnInit {

  constructor(
    public alumnoService: AlumnoService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  agregarAlumno(form: NgForm){
    if(form.value.id){
      this.alumnoService.updateAlumno(form.value).subscribe(
        res => console.log(res),
        err => console.error(err)
      );
      form.reset();
      this.router.navigate(['/']);
      alert('Alumno editado correctamente');
    } else {
      this.alumnoService.addAlumno(form.value).subscribe(
        res => console.log(res),
        err => console.error(err)
      );
      form.reset();
      alert('Alumno agregado correctamente');
    }
  }

  public getCurrentUrl(): number {
    if (this.router.url === '/editar-alumno') return 1;
    return 0;
  };
}
