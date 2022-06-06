import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HighchartsChartModule } from 'highcharts-angular';

import { StockRoutingModule } from './stock-routing.module';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { StockComponent } from './stock/stock.component';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
     StockComponent,
  ],
  imports: [
    CommonModule,
    StockRoutingModule,
    PerfectScrollbarModule,
    HighchartsChartModule,
    MatDialogModule,
    FormsModule
  ]
})
export class StockModule { }
