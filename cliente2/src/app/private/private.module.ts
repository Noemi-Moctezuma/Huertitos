import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { PrivateComponent } from './private.component';
import { MaterialModule } from '../components/material/material.module';
import { DialogEditarComponent } from './dialog-editar/dialog-editar.component';

import { ReactiveFormsModule } from '@angular/forms';
import { DialogAddCultivoComponent } from './dialog-add-cultivo/dialog-add-cultivo.component';

import { FullCalendarModule } from '@fullcalendar/angular'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction'; // a plugin!
@NgModule({
  declarations: [
    PrivateComponent,
    DialogEditarComponent,
    DialogAddCultivoComponent,
  ],
  imports: [
    MaterialModule,
    CommonModule,
    PrivateRoutingModule,
    ReactiveFormsModule,
    
    FullCalendarModule // register FullCalendar with your app
  ]
})
export class PrivateModule { }
