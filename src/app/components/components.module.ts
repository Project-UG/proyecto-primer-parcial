import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { ChartsModule } from 'ng2-charts';

import { DonaComponent } from './dona/dona.component';
import { ModalClienteComponent } from './modal-cliente/modal-cliente.component';
import { ModalVideoComponent } from './modal-video/modal-video.component';
import { ModalUsuarioComponent } from './modal-usuario/modal-usuario.component';
import { ModalDetalleVentaComponent } from './modal-detalle-venta/modal-detalle-venta.component';



@NgModule({
  declarations: [
    DonaComponent,
    ModalClienteComponent,
    ModalVideoComponent,
    ModalUsuarioComponent,
    ModalDetalleVentaComponent
  ],
  exports: [
    DonaComponent,
    ModalClienteComponent,
    ModalVideoComponent,
    ModalUsuarioComponent,
    ModalDetalleVentaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule,
    ReactiveFormsModule
  ]
})
export class ComponentsModule { }
