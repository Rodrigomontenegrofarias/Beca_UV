import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from './header.component';
import { permisosGuard } from '../guards/permisos.guard';

const routes: Routes = [
  {
    path: '',
    component: HeaderComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./modules/alumnos/alumnos.module').then(
            (m) => m.AlumnosModule
          ),
        canActivate: [permisosGuard],
      },
      {
        path: '',
        loadChildren: () =>
          import('./modules/casinos/casinos.module').then(
            (m) => m.CasinosModule
          ),
          canActivate: [permisosGuard],
      },
      {
        path: '',
        loadChildren: () =>
          import('./modules/documentos/documentos.module').then(
            (m) => m.DocumentosModule
          ),
          canActivate: [permisosGuard],
      },
      {
        path: '',
        loadChildren: () =>
          import('./modules/admin/admin.module').then(
            (m) => m.AdminModule
          ),
          canActivate: [permisosGuard],
      },
      {
        path: '',
        loadChildren: () =>
          import('./modules/login/login.module').then((m) => m.LoginModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeaderRoutingModule {}
