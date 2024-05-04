import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { configureShops, configureAuthentication } from '../configure';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    baseUrl: string;
    // logIn: boolean = false;

    constructor(private http: HttpClient, @Inject(PLATFORM_ID) private platformId: Object) {
        this.baseUrl = environment.baseUrl;
    }

    register(payload: any): Observable<any> {
        return this.http.post(`${this.baseUrl}${configureAuthentication.register}`, payload);
    }

    login(payload: any): Observable<any> {
        return this.http.post(`${this.baseUrl}${configureAuthentication.login}`, payload);
    }

    // getToken(): string | null {
    //     if (isPlatformBrowser(this.platformId)) {
    //         this.logIn = true;
    //         return localStorage.getItem('token');
    //     } else {
    //         return null;
    //     }
    // }

    // isLoggedIn(): boolean {
    //     return !!this.getToken();
    // }

}