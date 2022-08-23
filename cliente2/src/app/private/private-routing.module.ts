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
        path: 'sunxmin',
        loadChildren: () =>
          import('./sunxmin/sunxmin.module').then((m) => m.SunxminModule),
      },
      {
        path: 'tempxmin',
        loadChildren: () =>
          import('./tempxmin/tempxmin.module').then((m) => m.TempxminModule),
      },
      {
        path: 'info',
        loadChildren: () =>
          import('./info/info.module').then((m) => m.InfoModule),
      },
      {
        path: 'avg',
        loadChildren: () =>
          import('./avg/avg.module').then((m) => m.AvgModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivateRoutingModule {}
