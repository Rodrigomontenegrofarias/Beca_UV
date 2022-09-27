import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-alumnos-screen',
  templateUrl: './alumnos-screen.component.html',
  styleUrls: ['./alumnos-screen.component.scss']
})
export class AlumnosScreenComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public getCurrentUrl(): number {
    if (this.router.url === '/') return 1;
    if (this.router.url === '/agregar-alumno') return 2;
    if (this.router.url === '/editar-alumno') return 2;
    return 0;
  };

}