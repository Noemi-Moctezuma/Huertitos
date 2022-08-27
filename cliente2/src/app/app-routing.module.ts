import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   {
    path: 'private',
    loadChildren:() => import('./private/private.module').then((m)=> m.PrivateModule),
  }, 
  {
    path: '',
    loadChildren:() => import('./public/public.module').then((m)=> m.PublicModule),
  }, 
  {
    path: 'public',
    loadChildren:() => import('./public/public.module').then((m)=> m.PublicModule),
  }, 
  // ruta provisional para el dashboard
  {
    path: 'dashboard',
    redirectTo: '/private/dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
