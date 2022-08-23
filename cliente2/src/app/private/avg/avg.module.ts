import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AvgRoutingModule } from './avg-routing.module';
import { AvgComponent } from './avg.component';


@NgModule({
  declarations: [
    AvgComponent
  ],
  imports: [
    CommonModule,
    AvgRoutingModule
  ]
})
export class AvgModule { }
