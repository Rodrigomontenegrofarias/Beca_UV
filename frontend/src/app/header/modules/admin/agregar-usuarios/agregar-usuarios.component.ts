import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-agregar-usuarios',
  templateUrl: './agregar-usuarios.component.html',
  styleUrls: ['./agregar-usuarios.component.scss']
})
export class AgregarUsuariosComponent implements OnInit {

  constructor(
    public adminService: AdminService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }
  agregarUsuario(form: NgForm){
      this.adminService.addUser(form.value).subscribe(
        res => console.log(res),
        err => console.error(err)
      );
      form.reset();
      this.router.navigate(['/admin']);
      this.msgAdd();
  }
  
  msgAdd(){
    this._snackBar.open('Usuario agregado correctamente', '', {
      duration: 4000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });
  }

}
