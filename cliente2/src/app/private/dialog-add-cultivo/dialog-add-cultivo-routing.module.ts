import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilComponent } from '../perfil/perfil.component';
import { DialogAddCultivoComponent } from './dialog-add-cultivo.component';

const routes: Routes = [
  {
    path:'', component: DialogAddCultivoComponent
  },{
    path:'perfil', component: PerfilComponent
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerfilRoutingModule { }
