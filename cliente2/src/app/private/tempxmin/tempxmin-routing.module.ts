import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TempxminComponent } from './tempxmin.component';

const routes: Routes = [{
  path: '',
  component: TempxminComponent,
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TempxminRoutingModule { }
