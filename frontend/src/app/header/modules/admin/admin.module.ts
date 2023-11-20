import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import {AdminComponent} from './admin.component'
import { UsuariosComponent } from './usuarios/usuarios.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AgregarUsuariosComponent } from './agregar-usuarios/agregar-usuarios.component';


@NgModule({
  declarations: [
    UsuariosComponent,
    AdminComponent,
    AgregarUsuariosComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
