import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { CrearPersonaComponent } from './persona/crear-persona/crear-persona.component';
import { EditarPersonaComponent } from './persona/editar-persona/editar-persona.component';
import { EliminarPersonaComponent } from './persona/eliminar-persona/eliminar-persona.component';
import { BuscarPersonaComponent } from './persona/buscar-persona/buscar-persona.component';
import { CrearProductosComponent } from './productos/crear-productos/crear-productos.component';
import { EditarProductosComponent } from './productos/editar-productos/editar-productos.component';
import { EliminarProductosComponent } from './productos/eliminar-productos/eliminar-productos.component';
import { BuscarProductosComponent } from './productos/buscar-productos/buscar-productos.component';


@NgModule({
  declarations: [
    CrearPersonaComponent,
    EditarPersonaComponent,
    EliminarPersonaComponent,
    BuscarPersonaComponent,
    CrearProductosComponent,
    EditarProductosComponent,
    EliminarProductosComponent,
    BuscarProductosComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule
  ]
})
export class AdministracionModule { }
