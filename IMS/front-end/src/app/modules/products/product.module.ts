import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductsComponent } from './products/products.component';
import { ProductsDetailsComponent } from './products-details/products-details.component';
import { AddNewProductsComponent } from './add-new-products/add-new-products.component';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductsDetailsComponent,
    AddNewProductsComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
