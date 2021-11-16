import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpParams
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class HttpReqInterceptor implements HttpInterceptor {

  private urlBase = environment.backend
  private key = environment.apiKey
  private hash = environment.hash

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const url = this.urlBase + request.url
    const params = new HttpParams().set('ts', 1000).set('apikey', this.key).set('hash', this.hash)
    const req = request.clone({url, params})
    
    return next.handle(req);
  }
}
