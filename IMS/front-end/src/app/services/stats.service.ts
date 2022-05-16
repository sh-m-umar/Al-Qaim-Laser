import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  private URL = environment.serverURL;

  constructor(private http: HttpClient) { }

  getDashboardStats(dateRange){
    return this.http.post(`${this.URL}/dashboard/stats`, {dateRange});
  }

  getTopSellingProducts(dateRange){
    return this.http.post(`${this.URL}/stats/top-selling-products`, {dateRange});
  }

  getAmountBalance(dateRange){
    return this.http.post(`${this.URL}/stats/balance-record`, {dateRange});
  }
}
