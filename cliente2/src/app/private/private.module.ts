import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { PrivateComponent } from './private.component';
import { MaterialModule } from '../components/material/material.module';
import { DialogEditarComponent } from './dialog-editar/dialog-editar.component';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PrivateComponent,
    DialogEditarComponent,
  ],
  imports: [
    MaterialModule,
    CommonModule,
    PrivateRoutingModule,
    ReactiveFormsModule
  ]
})
export class PrivateModule { }
