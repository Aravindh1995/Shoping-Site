import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable()
export class CrosInterceptor implements HttpInterceptor {
  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Check if it's an OPTIONS request
    if (req.method === 'OPTIONS') {
      // Clone the request and add CORS headers
      const optionsReq = req.clone({
        setHeaders: {
          'Access-Control-Allow-Origin': '*', // Replace * with your allowed origin
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE', // Specify allowed methods
          'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token' // Specify allowed headers
        }
      });
      // Pass the modified request to the next handler
      return next.handle(optionsReq);
    }
    // If it's not an OPTIONS request, proceed as usual
    return next.handle(req);
  }
  
}