import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { LibrariesModule } from '../../libraries/libraries/libraries.module';
import { HomeComponent } from 'src/app/component/home/home/home.component';
import { ReportsComponent } from 'src/app/component/reports/reports/reports.component';
import { SecondaryUsersComponent } from 'src/app/component/secondary-users/secondary-users/secondary-users.component';
import { TransactionsComponent } from 'src/app/component/transactions/transactions/transactions.component';
import { DashboardComponent } from 'src/app/component/dashboard/dashboard/dashboard.component';
import { TransferMoneyComponent } from 'src/app/component/transfer-money/transfer-money/transfer-money.component';
import { ActivityDashboardComponent } from 'src/app/component/activity-dashboard/activity-dashboard/activity-dashboard.component';
import { FormModalComponent } from 'src/app/component/secondary-users/form-modal/form-modal.component';
import { FlexLayoutModule } from '@angular/flex-layout'

@NgModule({
  declarations: [    
    DashboardComponent,
    HomeComponent,
    ReportsComponent,
    SecondaryUsersComponent,
    TransactionsComponent,
    TransferMoneyComponent,
    ActivityDashboardComponent,
    FormModalComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    LibrariesModule,
    FlexLayoutModule
  ]
})
export class DashboardModule { }
