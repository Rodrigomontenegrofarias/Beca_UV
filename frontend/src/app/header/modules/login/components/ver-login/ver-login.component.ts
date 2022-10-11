import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ver-login',
  templateUrl: './ver-login.component.html',
  styleUrls: ['./ver-login.component.scss']
})
export class VerLoginComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      contraseña: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  ingresar(){
    console
  }

}
