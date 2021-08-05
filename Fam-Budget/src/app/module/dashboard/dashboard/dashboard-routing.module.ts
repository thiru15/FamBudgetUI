import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from 'src/app/component/dashboard/dashboard/dashboard.component';
import { HomeComponent } from 'src/app/component/home/home/home.component';
import { ReportsComponent } from 'src/app/component/reports/reports/reports.component';
import { SecondaryUsersComponent } from 'src/app/component/secondary-users/secondary-users/secondary-users.component';
import { TransactionsComponent } from 'src/app/component/transactions/transactions/transactions.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  // {
  //   path: 'transactions',
  //   component: TransactionsComponent
  // },
  // // {
  // //   path: 'expenses',
  // //   component:
  // // }
  // {
  //   path: 'secondary_users',
  //   component: SecondaryUsersComponent
  // },
  // {
  //   path: 'reports',
  //   component: ReportsComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
