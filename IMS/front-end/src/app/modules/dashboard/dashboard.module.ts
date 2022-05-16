import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HighchartsChartModule } from 'highcharts-angular';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { DefaultComponent } from './default/default.component';
import { MaterialModule } from "src/assets/angular-material.module";

@NgModule({
  declarations: [
     DefaultComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DashboardRoutingModule,
    PerfectScrollbarModule,
    HighchartsChartModule,
    MaterialModule
  ]
})
export class DashboardModule { }
