import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HuertoRoutingModule } from './huerto-routing.module';
import { HuertoComponent } from './huerto.component';

import { FullCalendarModule } from '@fullcalendar/angular'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction'; // a plugin!
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgChartsModule } from 'ng2-charts';

import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';




@NgModule({
  declarations: [
    HuertoComponent
  ],
  imports: [
    CommonModule,
    HuertoRoutingModule,
    MatFormFieldModule,
    NgChartsModule,
    FullCalendarModule, // register FullCalendar with your app,
    MatButtonModule,
    MatCardModule

  ]
})
export class HuertoModule { }
