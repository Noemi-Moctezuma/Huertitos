import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { NgChartsModule } from 'ng2-charts';
import { MaterialModule } from 'src/app/components/material/material.module';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgChartsModule,
    MaterialModule
  ]
})
export class DashboardModule { }
