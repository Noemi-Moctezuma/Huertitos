import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilComponent } from '../perfil/perfil.component';
import { DialogEditarComponent } from './dialog-editar.component';

const routes: Routes = [
  {
    path:'', component: DialogEditarComponent
  },{
    path:'perfil', component: PerfilComponent
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerfilRoutingModule { }
