<<<<<<< Updated upstream
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
        path: 'info',
        loadChildren: () =>
          import('./info/info.module').then((m) => m.InfoModule),
      },
      {
        path: 'mis-huertos',
        loadChildren: () =>
          import('./mis-huertos/mis-huertos.module').then((m) => m.MisHuertosModule),
      },
      
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivateRoutingModule {}
=======
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
        path: 'info',
        loadChildren: () =>
          import('./info/info.module').then((m) => m.InfoModule),
      },
      
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivateRoutingModule {}
>>>>>>> Stashed changes
