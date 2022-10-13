import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login.component';
import { VerLoginComponent } from './components/ver-login/ver-login.component';
import { LoginContainerComponent } from './containers/login-container/login-container.component';
import { LoginScreenComponent } from './screens/login-screen/login-screen.component';
import { LoginRoutingModule } from './login-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    LoginComponent,
    VerLoginComponent,
    LoginContainerComponent,
    LoginScreenComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedModule
  ]
})
export class LoginModule { }
