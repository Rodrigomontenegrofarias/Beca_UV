import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/models/user';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {
  displayedColumns: string[] = ['usuario', 'casino', 'acciones'];
  dataSource = new MatTableDataSource<User>;

  constructor(
    public adminService: AdminService,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.verUsuarios();
  }
  
  verUsuarios() {
    this.adminService.getUser().subscribe(
        res => {
          this.dataSource.data = res;
        },
        err => console.log(err)
    )
  }

  borrarUsuario(id: string) {
    if (confirm('¿Desea eliminar este usuario?')){
      this.adminService.deleteUser(id).subscribe(
        (res) => {
          console.log(res);
        },
        (err) => console.error(err) 
        );
      this.msgDelete();
      this.verUsuarios();
    }
  }

  msgDelete(){
    this.snackBar.open('El usuario ha sido eliminado correctamente', '', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }

}
