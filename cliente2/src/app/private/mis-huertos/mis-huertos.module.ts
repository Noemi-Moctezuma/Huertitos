import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MisHuertosRoutingModule } from './mis-huertos-routing.module';
import { MisHuertosComponent } from './mis-huertos.component';

import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    MisHuertosComponent
  ],
  imports: [
    CommonModule,
    MisHuertosRoutingModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class MisHuertosModule { }
