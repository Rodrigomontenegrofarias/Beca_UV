import { Component, OnInit, ViewChild } from '@angular/core';
import { AlumnoService } from 'src/app/services/alumnos/alumno.service';
import { CasinoService } from 'src/app/services/casinos/casinos.service';
import { ExportService } from 'src/app/services/export/export.service';

@Component({
  selector: 'app-ver-documentos',
  templateUrl: './ver-documentos.component.html',
  styleUrls: ['./ver-documentos.component.scss']
})
export class VerDocumentosComponent implements OnInit {

  constructor(
    public alumnoService: AlumnoService,
    public casinoService: CasinoService,
    public exportService: ExportService
  ){}

  ngOnInit(): void {
  }

  exportAsExcelAlumnos():void{
    let respuesta: any;

    this.alumnoService.getAlumnos().subscribe(
      res => {
        respuesta = res;
        this.exportService.exportToExcel(respuesta, 'Canje-Alumnos', 1);
      },
      err => console.log(err)
    )
  }
  
  exportAsExcelCasinos():void{
    let respuesta: any;

    this.casinoService.getCasinos().subscribe(
      res => {
        respuesta = res;
        this.exportService.exportToExcel(respuesta, 'Canje-Casinos', 2);
      },
      err => console.log(err)
    )
  }
}
