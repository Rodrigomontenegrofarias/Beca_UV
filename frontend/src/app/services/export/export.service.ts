import { Injectable } from '@angular/core';
import * as FileSaver from 'file-saver';
import { Alignment, BorderStyle, Workbook, Worksheet } from 'exceljs';

@Injectable({
  providedIn: 'root',
})
export class ExportService {
  constructor() {}

  public exportToExcel(json: any[], excelFileName: string, canje: number): void {
    const workbook = new Workbook();
    const worksheet: Worksheet = workbook.addWorksheet('Canjes');

    // Configuración de columnas
    if (canje === 1) {
      worksheet.columns = [
        { header: 'Nombre', key: 'nombre', width: 18 },
        { header: 'Rut', key: 'rut', width: 18 },
        { header: 'Cantidad', key: 'cantidad', width: 12 },
      ];
    } else {
      worksheet.columns = [
        { header: 'Nombre', key: 'nombre', width: 52 },
        { header: 'Cantidad', key: 'cantidad', width: 12 },
      ];
    }
    
    // Configuración de estilos
    const fillStyle: any = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'FFD9D9D9' },
    };
    
    // Estilo para encabezados
    const headerStyle: any = {
      font: { bold: true },
      border: {
        top: { style: 'thin' as BorderStyle },
        left: { style: 'thin' as BorderStyle },
        bottom: { style: 'thin' as BorderStyle },
        right: { style: 'thin' as BorderStyle },
      },
      fill: fillStyle,
      alignment: { horizontal: 'center', vertical: 'middle' } as Alignment
    };

    // Estilo para los datos
    const bodyCellStyle: any = {
      border: {
        top: { style: 'thin' as BorderStyle },
        left: { style: 'thin' as BorderStyle },
        bottom: { style: 'thin' as BorderStyle },
        right: { style: 'thin' as BorderStyle },
      },
      alignment: { horizontal: 'center', vertical: 'middle' } as Alignment,
    };

    // Aplica el estilo a los encabezados
    worksheet.getRow(1).eachCell((cell) => {
      cell.style = headerStyle;
    });

    // Llena las filas con datos
    json.forEach((rowData: any) => {
      const row = worksheet.addRow(rowData);
      
      // Aplica el estilo a los datos
      row.eachCell((cell: any) => {
        cell.style = bodyCellStyle;
      });
    });

    // Itera sobre las filas con datos y aplica el borde a las celdas necesarias
    worksheet.eachRow((row, rowNumber) => {
      // Si rowNumber es 1, es la primera fila (encabezados) y no queremos aplicar bordes a ella
      if (rowNumber > 1) {
        // Itera sobre las celdas de la fila actual
        row.eachCell((cell) => {
          // Aplica el borde a las celdas con datos
          if (cell.value !== undefined && cell.value !== null) {
            cell.border = {
              top: { style: 'thin' as BorderStyle },
              left: { style: 'thin' as BorderStyle },
              bottom: { style: 'thin' as BorderStyle },
              right: { style: 'thin' as BorderStyle },
            }        
          }
        });
      }
    });

    // Guardar el archivo
    workbook.xlsx.writeBuffer().then((buffer) => {
      this.saveAsExcelFile(buffer, excelFileName);
    });
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    });
    FileSaver.saveAs(data, fileName + '.xlsx');
  }
}