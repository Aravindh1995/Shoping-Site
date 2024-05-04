import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { configureShops } from '../configure';
import { ShopTypeModel, CountryListModel, ShopModel } from '../../shared-files/models/shop.model';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.baseUrl;
  }

  getShopTypes(): Observable<any> {
    return this.http.get(`${this.baseUrl}${configureShops.shopType}`);
  }

  createShopCreate(payload: any): Observable<any> {
    return this.http.post(`${this.baseUrl}${configureShops.shopCreate}`, payload);
  }

  updateShopCreate(payload: any): Observable<any> {
    return this.http.put(`${this.baseUrl}${configureShops.shopUpdate}`, payload);
  }

  getShopList(): Observable<any> {
    return this.http.get(`${this.baseUrl}${configureShops.shopList}`);
  }

  deleteShop(id: string): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}${configureShops.shopDelete}`, { body: { id } });
  }

  getCountryList(): Observable<any> {
    let countryJson = '../../../assets/json/country.json';
    return this.http.get(countryJson);
  }

}
