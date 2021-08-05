import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { LibrariesModule } from '../../libraries/libraries/libraries.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    LibrariesModule,
  ]
})
export class DashboardModule { }
