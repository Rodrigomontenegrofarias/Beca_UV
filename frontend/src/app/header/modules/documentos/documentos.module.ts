import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentosRoutingModule } from './documentos-routing.module';
import {DocumentosComponent} from './documentos.component'
import { VerDocumentosComponent } from './ver-documentos/ver-documentos.component'
import {SharedModule} from '../../../shared/shared.module';


@NgModule({
  declarations: [
    DocumentosComponent,
    VerDocumentosComponent
  ],
  imports: [
    CommonModule,
    DocumentosRoutingModule,
    SharedModule
  ]
})
export class DocumentosModule { }
