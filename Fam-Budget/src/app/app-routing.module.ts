import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './module/auth/auth/auth.module';
import { DashboardModule } from './module/dashboard/dashboard/dashboard.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import("../app/module/auth/auth/auth-routing.module").then( ()=> AuthModule)
  },
  {
    path: 'dashboard',
    loadChildren: ()=> import("../app/module/dashboard/dashboard/dashboard-routing.module").then( ()=> DashboardModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
