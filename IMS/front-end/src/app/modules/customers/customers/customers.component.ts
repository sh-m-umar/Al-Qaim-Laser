import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { CustomerService } from 'src/app/services/customer.service';
import { DataTableDirective } from 'angular-datatables';
import * as $ from 'jquery';
import 'datatables.net';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomerComponent implements OnDestroy, OnInit {
  // Must be declared as "any", not as "DataTables.Settings"
  dtOptions: any = {};
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(
    private customerService: CustomerService
  ){}

  ngOnInit(): void {
    
    let dataUrl: any;

    let dtElement = this.dtElement;
    let dtTrigger = this.dtTrigger;
    this.dtOptions = {
      ajax: 'http://localhost:9090/customer/getallcustomers',
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
      pageLength: 14
    };
  }

  ngOnDestroy(): void {
  }
}
