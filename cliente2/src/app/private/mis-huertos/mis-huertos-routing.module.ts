import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MisHuertosComponent } from './mis-huertos.component';

const routes: Routes = [
  {
    path:'', component: MisHuertosComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MisHuertosRoutingModule { }
