import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvgComponent } from './avg.component';

const routes: Routes = [
  {
    path: '',
    component: AvgComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AvgRoutingModule { }
