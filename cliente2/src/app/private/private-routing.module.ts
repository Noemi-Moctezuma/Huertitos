import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateComponent } from './private.component';

const routes: Routes = [
  {
    path: '',
    component: PrivateComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'prefix',
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      {
        path: 'perfil',
        loadChildren: () =>
          import('./perfil/perfil.module').then((m) => m.PerfilModule),
      },
      {
        path: 'mis-huertos',
        loadChildren: () =>
          import('./mis-huertos/mis-huertos.module').then((m) => m.MisHuertosModule),
      },
      {
        path: 'huerto',
        loadChildren: () =>
          import('./huerto/huerto.module').then((m) => m.HuertoModule),
      },
      
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivateRoutingModule {}
