import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SunxminComponent } from './sunxmin.component';

const routes: Routes = [{
  path: '',
  component: SunxminComponent,
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SunxminRoutingModule { }
