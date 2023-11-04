import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from '../../../../../services/login/login.service';
import { Login } from 'src/app/models/user';

@Component({
  selector: 'app-ver-login',
  templateUrl: './ver-login.component.html',
  styleUrls: ['./ver-login.component.scss']
})
export class VerLoginComponent implements OnInit {
  form: FormGroup;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private router: Router,
    public loginService: LoginService
  ) { 
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  ingresar(){

    /* const usuario = this.form.value.usuario;
    const password = this.form.value.password; */
    let user = this.form.value;
    if(user.usuario.length == 0 || user.password.length == 0){
      this.error();
    } else {
      let respuesta: Login = {
        token: ''
      };
      this.loginService.loginUser(user).subscribe(
        res => {
          respuesta = res;

          if (respuesta.token) {
            localStorage.setItem('token_login', respuesta.token);
            this.isLoading();
          } else {
            this.error();
          }
        },
        err => console.error(err)
      );
    }

  }

  error(){
    this._snackBar.open('Usuario o contraseña inválida', '', {
      duration: 4000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });
  }

  isLoading(){
    this.loading = true;
    setTimeout(() => {
      this.router.navigate(['/']);
      this.loading = false
  },2000);
  }

}
