
import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHandler } from '@angular/common/http';
import { HttpEvent } from '@angular/common/http';
import { CookiesService } from './cookies.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
  token: string;
  constructor(private cookiesService: CookiesService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    this.token = this.cookiesService.getUserToken();
    if (this.token) {
      const tokenizedReq = req.clone({ headers: req.headers.set('Authorization', this.token) });
      return next.handle(tokenizedReq);
    }
    return next.handle(req);
  }
}