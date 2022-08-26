import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AvgRoutingModule } from './avg-routing.module';
import { AvgComponent } from './avg.component';
import { NgChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    AvgComponent
  ],
  imports: [
    CommonModule,
    AvgRoutingModule,
    NgChartsModule,
  ]
})
export class AvgModule { }
