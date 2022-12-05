import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MisHuertosComponent } from './mis-huertos.component';
import { InfoComponent } from '../info/info.component';
const routes: Routes = [
  {
    path:'', component: MisHuertosComponent
  },
  {
    path:'info/:id',component: InfoComponent
  },
  {
    path: 'info', component: InfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MisHuertosRoutingModule { }
