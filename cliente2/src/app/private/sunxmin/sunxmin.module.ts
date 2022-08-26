import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SunxminRoutingModule } from './sunxmin-routing.module';
import { SunxminComponent } from './sunxmin.component';


@NgModule({
  declarations: [
    SunxminComponent
  ],
  imports: [
    CommonModule,
    SunxminRoutingModule
  ]
})
export class SunxminModule { }
