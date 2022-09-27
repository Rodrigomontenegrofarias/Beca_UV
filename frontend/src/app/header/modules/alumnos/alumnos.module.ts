import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { AlumnosRoutingModule } from './alumnos-routing.module';
import { AlumnosScreenComponent } from './screens/alumnos-screen/alumnos-screen.component';
import { AlumnosComponent } from './alumnos.component';
import { AlumnoComponent } from './components/alumnos-table/alumno.component';
import { ContainersComponent } from './containers/alumnos-containers/containers.component';
import {MatIconModule} from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { AgregarAlumnoComponent } from './components/agregar-alumno/agregar-alumno.component';
import { AgregarAlumnoContainerComponent } from './containers/agregar-alumno-container/agregar-alumno-container.component';


@NgModule({
  declarations: [
    AlumnosScreenComponent,
    AlumnosComponent,
    AlumnoComponent,
    ContainersComponent,
    AgregarAlumnoComponent,
    AgregarAlumnoContainerComponent,
  ],
  imports: [
    CommonModule,
    AlumnosRoutingModule,
    MatIconModule,
    RouterModule,
    FormsModule
  ]
})
export class AlumnosModule { }
