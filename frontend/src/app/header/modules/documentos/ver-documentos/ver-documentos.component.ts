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

  fechaActual = new Date();

  dia = this.fechaActual.getDate();
  mes = this.fechaActual.getMonth() + 1; // Los meses comienzan desde 0, así que se suma 1
  anio = this.fechaActual.getFullYear();

  fecha = this.dia+'-'+this.mes+'-'+this.anio;

  exportAsExcelAlumnos():void{
    let respuesta: any;

    this.alumnoService.getAlumnos().subscribe(
      res => {
        respuesta = res;
        this.exportService.exportToExcel(respuesta, 'Canje-Alumnos ('+this.fecha+')', 1);
      },
      err => console.log(err)
    )
  }
  
  exportAsExcelCasinos():void{
    let respuesta: any;

    this.casinoService.getCasinos().subscribe(
      res => {
        respuesta = res;
        this.exportService.exportToExcel(respuesta, 'Canje-Casinos ('+this.fecha+')', 2);
      },
      err => console.log(err)
    )
  }
}
