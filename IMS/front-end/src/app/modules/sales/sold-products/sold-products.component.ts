import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { SalesService } from 'src/app/services/sales.service';
import { DataTableDirective } from 'angular-datatables';
import * as $ from 'jquery';
import 'datatables.net';
import { environment } from '../../../../environments/environment';
import * as moment from 'moment';
@Component({
  selector: 'app-sold-products',
  templateUrl: './sold-products.component.html',
  styleUrls: ['./sold-products.component.scss'],
})
export class SoldProductsComponent implements OnDestroy, OnInit {
  private URL = environment.serverURL;

  // Must be declared as "any", not as "DataTables.Settings"
  dtOptions: any = {};
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private salesService: SalesService) {}

  ngOnInit(): void {
    let dataUrl: any = `${this.URL}/salerecord/getallsoldproducts`;

    let dtElement = this.dtElement;
    let dtTrigger = this.dtTrigger;
    this.dtOptions = {
      ajax: dataUrl,
      columns: [
        {
          title: 'SKU',
          data: 'productId.sku',
        },
        {
          title: 'Product Name',
          data: 'productId.name',
        },
        {
          title: 'Buyer',
          data: 'customerId.firstName',
        },
        {
          title: 'Order Id',
          data: 'orderId.orderId',
        },
        {
          title: 'Selling Price',
          data: 'sellingPrice',
        },
        {
          title: 'Date',
          data: 'created_at',
        },
        {
          title: 'Sold for',
          data: 'sellingPrice',
        },
      ],
      // Declare the use of the extension in the dom parameter
      dom: 'Bfrtip',
      // Configure the buttons
      pagingType: 'full_numbers',
      pageLength: 14,
    };
  }

  ngOnDestroy(): void {}
}
