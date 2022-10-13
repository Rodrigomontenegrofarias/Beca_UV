import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ver-login',
  templateUrl: './ver-login.component.html',
  styleUrls: ['./ver-login.component.scss']
})
export class VerLoginComponent implements OnInit {
  form: FormGroup;
  loading = false;
  url_api = 'http://localhost:4000/login'

  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private router: Router
  ) 
  { 
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  ingresar(){
    const usuario = this.form.value.usuario;
    const password = this.form.value.password;

    this.http.get(`${this.url_api}/${usuario}`).subscribe(
      res => {
        let respuesta=(Object.values(res));
        let Usuario=respuesta[1];
        let Password = respuesta[2];

        if (Usuario == usuario && Password == password) {
          this.isLoading();
        }
        else {
          this.error();
          this.form.reset();
        }
      },
      err => this.error()
    );
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
