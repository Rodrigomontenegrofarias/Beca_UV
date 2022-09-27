import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VerCasinosScreenComponent } from './screens/ver-casinos-screen/ver-casinos-screen.component';
import { CasinosComponent } from './casinos.component';

const routes: Routes = [
  {
    path: '',
    component: CasinosComponent,
    children: [
      { 
        path: 'casinos', component: VerCasinosScreenComponent
      },
      {
        path: 'agregar-casino', component: VerCasinosScreenComponent
      },
      {
        path: 'editar-casino', component: VerCasinosScreenComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CasinosRoutingModule { }
