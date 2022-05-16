import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private URL = environment.serverURL;

  constructor(private http: HttpClient) { }

  getAllProducts(){
    return this.http.get(`${this.URL}/product/getallproducts`);
  }
 
  getProductDetails(sku: string){
    return this.http.post(`${this.URL}/product/getproduct`, {sku});
  }
}
