import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public products = [];

  constructor(
    private productService: ProductService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(){
    this.productService.getAllProducts().subscribe({
      next: (res: any) => {
        this.products = res.products;
      },
      error: (error) => {
        console.log("Error in getting all products: ", error);
      },
    });
  }

  showDetails(sku: string){
    this.router.navigate([`/product/products-details/${sku}`])
  }
}
