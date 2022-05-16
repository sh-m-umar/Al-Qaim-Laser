import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SoldProductsComponent } from './sold-products/sold-products.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'list-sold-products',
        component: SoldProductsComponent,
        data: {
          title: 'Orders'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaleRoutingModule { }
