import { Component, OnInit } from '@angular/core';
import { Casino } from 'src/app/models/casino';
import { CasinoService } from '../../../../../services/casinos/casinos.service';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-ver-casinos',
  templateUrl: './ver-casinos.component.html',
  styleUrls: ['./ver-casinos.component.scss']
})
export class VerCasinosComponent implements OnInit {

  constructor(
    public casinoService: CasinoService,
    public loginService: LoginService
    ) { }

  ngOnInit(): void {
    this.verCasinos();
  }

  verCasinos() {
    this.casinoService.getCasinos().subscribe(
        res => {
          this.casinoService.casinos = res;
        },
        err => console.log(err)
    )
  }

  borrarCasino(id: string) {
    if (confirm('¿Desea eliminar este casino?')){
      this.casinoService.deleteCasino(id).subscribe(
        (res) => {
          console.log(res);
        },
        (err) => console.error(err) 
      );
      alert('El casino se ha eliminado correctamente');
      this.verCasinos();
    }
  }

}
