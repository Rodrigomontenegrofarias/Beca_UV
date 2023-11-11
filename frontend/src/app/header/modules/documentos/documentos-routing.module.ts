import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {DocumentosComponent} from './documentos.component';
import {VerDocumentosComponent} from './ver-documentos/ver-documentos.component'

const routes: Routes = [
  {
    path: '',
    component: DocumentosComponent,
    children: [
      { 
        path: 'documentos', component: VerDocumentosComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentosRoutingModule { }
