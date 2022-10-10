import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from './header.component';

const routes: Routes = [
  {
    path: '',
    component: HeaderComponent,
    children: [
      { path: '', loadChildren: () => import('./modules/alumnos/alumnos.module').then(m => m.AlumnosModule) },
      { path: '', loadChildren: () => import('./modules/casinos/casinos.module').then(m => m.CasinosModule) },
      { path: '', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeaderRoutingModule { }
