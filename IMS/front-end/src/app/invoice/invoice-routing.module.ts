import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindInvoiceComponent } from './find-invoice/find-invoice.component';
import { InvoiceComponent } from './invoice/invoice.component';

const routes: Routes = [
    {
      path: '',
      children: [
        {
          path: 'new',
          component: InvoiceComponent,
          data: {
            title: 'Invoice'
          }
        },
        {
          path: 'search',
          component: FindInvoiceComponent,
          data: {
            title: 'Find Invoice'
          }
        },
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoiceRoutingModule { }
