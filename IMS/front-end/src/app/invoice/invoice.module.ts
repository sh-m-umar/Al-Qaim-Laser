import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InvoiceRoutingModule } from './invoice-routing.module';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { NgbModalModule, NgbDatepickerModule, NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { InvoiceComponent } from './invoice/invoice.component';
import { FindInvoiceComponent } from './find-invoice/find-invoice.component';



@NgModule({
  declarations: [
    InvoiceComponent,
    FindInvoiceComponent,
  ],
  imports: [
    CommonModule,
    InvoiceRoutingModule,
    PerfectScrollbarModule,
      CalendarModule.forRoot({
        provide: DateAdapter,
        useFactory: adapterFactory
      }),
    NgbModalModule,
    NgbDatepickerModule,
    NgbTimepickerModule,
    FormsModule,
  ]
})
export class InvoiceModule { }
