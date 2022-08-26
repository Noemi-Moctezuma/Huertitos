import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { PrivateComponent } from './private.component';
import { MaterialModule } from '../components/material/material.module';


@NgModule({
  declarations: [
    PrivateComponent,
  ],
  imports: [
    MaterialModule,
    CommonModule,
    PrivateRoutingModule,
  ]
})
export class PrivateModule { }
