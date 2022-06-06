import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private URL = environment.serverURL;

  constructor(private http: HttpClient) { }

  updateUser(user){
    return this.http.post(`${this.URL}/user/update`, {user});
  }
}
