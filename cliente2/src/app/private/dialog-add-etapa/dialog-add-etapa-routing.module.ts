import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilComponent } from '../perfil/perfil.component';
import { DialogAddEtapaComponent } from './dialog-add-etapa.component';

const routes: Routes = [
  {
    path:'', component: DialogAddEtapaComponent
  },{
    path:'perfil', component: PerfilComponent
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerfilRoutingModule { }
