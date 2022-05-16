import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HighchartsChartModule } from 'highcharts-angular';

import { StockRoutingModule } from './stock-routing.module';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { StockComponent } from './stock/stock.component';


@NgModule({
  declarations: [
     StockComponent,
  ],
  imports: [
    CommonModule,
    StockRoutingModule,
    PerfectScrollbarModule,
    HighchartsChartModule
  ]
})
export class StockModule { }
