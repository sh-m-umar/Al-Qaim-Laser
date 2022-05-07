import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customers/customers.component';
import { CustomersDetailsComponent } from './customers-details/customers-details.component';
import { AddNewCustomersComponent } from './add-new-customers/add-new-customers.component';


@NgModule({
  declarations: [
    CustomerComponent,
    CustomersDetailsComponent,
    AddNewCustomersComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
