import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss']
})
export class ProductsDetailsComponent implements OnInit {

  public productSKU: string;
  public product: any;
  public mainImage: string = 'assets/images/products/13.png';

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
      this.productSKU = this.route.snapshot.paramMap.get('id');
      this.getProductDetails(this.productSKU)
  }

  getProductDetails(sku: string){
    this.productService.getProductDetails(sku).subscribe({
      next: (res: any) => {
        this.product = res.product;
      },
      error: (error) => {
        console.log("Error in getting product details: ", error);
      }
    });
  }

  changeMainImage(image: string){
    this.mainImage = image;
  }
}
