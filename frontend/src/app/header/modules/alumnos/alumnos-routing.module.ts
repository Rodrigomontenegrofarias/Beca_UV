import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AlumnosScreenComponent } from './screens/alumnos-screen/alumnos-screen.component';
import { AlumnosComponent } from './alumnos.component';

const routes: Routes = [
  {
    path: '',
    component: AlumnosComponent,
    children: [
      { 
        path: '', component: AlumnosScreenComponent
      },
      {
        path: 'agregar-alumno', component: AlumnosScreenComponent
      },
      {
        path: 'editar-alumno', component: AlumnosScreenComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnosRoutingModule { }
