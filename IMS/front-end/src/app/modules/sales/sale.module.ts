import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaleRoutingModule } from './sale-routing.module';
import { SoldProductsComponent } from './sold-products/sold-products.component';
import { DataTablesModule } from "angular-datatables";
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from 'src/app/services/interceptor.service';

@NgModule({
  declarations: [
    SoldProductsComponent
  ],
  imports: [
    CommonModule,
    SaleRoutingModule,
    DataTablesModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
     }
  ],
})
export class SaleModule { }
