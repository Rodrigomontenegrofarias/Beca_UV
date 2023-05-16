import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from '../../../../../services/login/login.service';

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
    var user = this.form.value
    if(user.usuario.length == 0 || user.password.length == 0){
      this.error();
    } else {
      let respuesta;
      this.loginService.loginUser(user).subscribe(
        res => respuesta = res,
        err => console.error(err)
      );
  
      if (respuesta == 201) {
        this.isLoading();
      }
      else {
        this.error();
        this.form.reset();
      }
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
