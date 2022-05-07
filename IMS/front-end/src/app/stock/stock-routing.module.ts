import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockComponent } from './stock/stock.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: StockComponent,
        data: {
          title: 'Stock'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockRoutingModule { }
