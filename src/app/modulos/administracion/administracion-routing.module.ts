import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarPersonaComponent } from './persona/buscar-persona/buscar-persona.component';
import { CrearPersonaComponent } from './persona/crear-persona/crear-persona.component';
import { EditarPersonaComponent } from './persona/editar-persona/editar-persona.component';
import { EliminarPersonaComponent } from './persona/eliminar-persona/eliminar-persona.component';

const routes: Routes = [
  
  {
    path: 'crear-persona',
    component: CrearPersonaComponent
  },
  {
    path: 'editar-persona',
    component: EditarPersonaComponent
  },
  {
    path: 'buscar-persona',
    component: BuscarPersonaComponent
  },
  {
    path: 'eliminar-persona',
    component: EliminarPersonaComponent
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
