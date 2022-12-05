import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterModule, Routes } from '@angular/router';
import { HuertoComponent } from './huerto.component';


const routes: Routes = [
 { path: '',
  component: HuertoComponent,
},
];

@NgModule({
  imports: [RouterModule.forChild(routes),
    MatFormFieldModule // or SharedModule that exports MatFormFieldModule
  ],
  exports: [RouterModule]
})
export class HuertoRoutingModule { }
