import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private URL = environment.serverURL;

  constructor(private http: HttpClient) { }

  getallCustomers(){
    return this.http.get(`${this.URL}/customer/getallcustomers`);
  }

  addCustomers(customer: any){
    return this.http.post(`${this.URL}/customer/add`, {customer});
  }
}
