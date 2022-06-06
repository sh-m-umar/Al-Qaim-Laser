import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import * as Chart from 'chart.js';
import { ProductService } from 'src/app/services/product.service';
import { SnackBarService } from 'src/app/services/snack-bar.service';
import { DeleteModalComponent } from '../../../shared/components/delete-modal/delete-modal.component';
@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss'],
})
export class StockComponent implements OnInit {
  public products: any[] = [];
  public stockInput: number;
  public productToUpdate: string = '';
  public update: boolean = false;

  constructor(
    private productService: ProductService,
    private router: Router,
    public dialog: MatDialog,
    private snackBarService: SnackBarService
  ) {}

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe({
      next: (res: any) => {
        if (res.code == 'ALL_PRODUCTS') {
          this.products = res.products;
        }
      },
      error: (error) => {
        this.products = [];
        console.log('Error in getting products for stock: ', error);
      },
    });
  }

  showDetails(sku: string) {
    this.router.navigate([`/product/products-details/${sku}`]);
  }

  showUpdateStockInput(sku){
    this.stockInput = null;
    this.update = true;
    this.productToUpdate = sku;
  }

  updateStock(name, sku, stock) {
    if (isNaN(stock) || stock === null) {
      this.snackBarService.openSnackBar(
        'Enter stock value',
        'warning',
        'bottom'
      );
      return;
    }
    const deleteDialogRef = this.dialog.open(DeleteModalComponent, {
      data: {title: `Are you sure you want to update the stock of "${name}" by "${stock}"?`, submitButton: 'Yes', cancelButton: 'No'}
    });
    
    deleteDialogRef.afterClosed().subscribe((deleteStatus) => {
      if (deleteStatus === 'cancel') {
        return;
      } else if (deleteStatus === 'confirm') {
        this.productService.updateStock(sku, stock).subscribe({
          next: (res: any) => {
            if (res.code === 'STOCK_UPDATED') {

              this.products.forEach( (item) => {
                if(item.sku === res.result.sku) {
                  item.stock = res.result.stock;
                }
              });

              this.update = false;
              this.productToUpdate = '';

              this.snackBarService.openSnackBar(
                `Stock of ${res.result.name} updated to ${res.result.stock}.`,
                'success',
                'bottom'
              );
            }
          },
          error: (error) => {
            this.update = false;
            this.productToUpdate = '';
            console.log("Error in updating stock: ", error);
            this.snackBarService.openSnackBar(
              'Stock not updated.',
              'error',
              'bottom'
            );
          },
        });
      }
    });
  }
}
