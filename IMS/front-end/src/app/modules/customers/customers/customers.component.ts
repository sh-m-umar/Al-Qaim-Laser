import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { CustomerService } from 'src/app/services/customer.service';
import { DataTableDirective } from 'angular-datatables';
import * as $ from 'jquery';
import 'datatables.net';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomerComponent implements OnDestroy, OnInit {

  private URL = environment.serverURL;

  // Must be declared as "any", not as "DataTables.Settings"
  dtOptions: any = {};
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(
    private customerService: CustomerService
  ){}

  ngOnInit(): void {
    
    let dataUrl: any = `${this.URL}/customer/getallcustomers`;

    let dtElement = this.dtElement;
    let dtTrigger = this.dtTrigger;
    this.dtOptions = {
      ajax: dataUrl,
      columns: [{
        title: 'First name',
        data: 'firstName'
      }, {
        title: 'Last name',
        data: 'lastName'
      }, {
        title: 'Phone',
        data: 'phone'
      }, {
        title: 'Balance',
        data: 'balance'
      }, {
        title: 'Email',
        data: 'email'
      }, {
        title: 'City',
        data: 'address.city'
      }, ],
      // Declare the use of the extension in the dom parameter
      dom: 'Bfrtip',
      // Configure the buttons
      pagingType: 'full_numbers',
      pageLength: 14,
      rowCallback: (row: Node, data: any[] | Object, index: number) => {
        const self = this;
        // Unbind first in order to avoid any duplicate handler
        // (see https://github.com/l-lin/angular-datatables/issues/87)
        // Note: In newer jQuery v3 versions, `unbind` and `bind` are 
        // deprecated in favor of `off` and `on`
        $('td', row).off('click');
        $('td', row).on('click', () => {
          self.someClickHandler(data);
        });
        return row;
      }
    };
  }

  someClickHandler(info: any): void {
    console.log("info: ", info);
  }

  ngOnDestroy(): void {
  }
}
