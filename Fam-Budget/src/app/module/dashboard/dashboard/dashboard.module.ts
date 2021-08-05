import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { LibrariesModule } from '../../libraries/libraries/libraries.module';
import { HomeComponent } from 'src/app/component/home/home/home.component';
import { ReportsComponent } from 'src/app/component/reports/reports/reports.component';
import { SecondaryUsersComponent } from 'src/app/component/secondary-users/secondary-users/secondary-users.component';
import { TransactionsComponent } from 'src/app/component/transactions/transactions/transactions.component';
import { DashboardComponent } from 'src/app/component/dashboard/dashboard/dashboard.component';


@NgModule({
  declarations: [    
    DashboardComponent,
    HomeComponent,
    ReportsComponent,
    SecondaryUsersComponent,
    TransactionsComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    LibrariesModule,
  ]
})
export class DashboardModule { }
