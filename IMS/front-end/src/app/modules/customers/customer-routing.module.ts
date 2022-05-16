import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewCustomersComponent } from './add-new-customers/add-new-customers.component';
import { CustomersDetailsComponent } from './customers-details/customers-details.component';
import { CustomerComponent } from './customers/customers.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'list-customer',
        component: CustomerComponent,
        data: {
          title: 'All Customers'
        }
      },
      {
        path: 'customer-details',
        component: CustomersDetailsComponent,
        data: {
          title: 'Customer Details'
        }
      },
      {
        path: 'add-new-customer',
        component: AddNewCustomersComponent,
        data: {
          title: 'Add New Customer'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
