import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TempxminRoutingModule } from './tempxmin-routing.module';
import { TempxminComponent } from './tempxmin.component';


@NgModule({
  declarations: [
    TempxminComponent
  ],
  imports: [
    CommonModule,
    TempxminRoutingModule
  ]
})
export class TempxminModule { }
