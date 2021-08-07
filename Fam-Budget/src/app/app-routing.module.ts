import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileModule } from '../app/module/profile/profile/profile.module';
import { ProfileComponent } from './component/profile/profile/profile.component';
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
  },
  {
    path: 'profile',
    loadChildren: ()=> import("../app/module/profile/profile/profile.module").then( ()=> ProfileModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
