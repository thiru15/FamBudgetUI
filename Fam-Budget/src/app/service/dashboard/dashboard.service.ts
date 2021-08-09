import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from 'src/app/constants/url.contants';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  headerOptions: any;
  constructor(private http: HttpClient) {
    this.headerOptions = new HttpHeaders({
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    });
   }

   getTransactions(accountNumber: any, customerId: any): Observable<any> {
    const parameters = new HttpParams().set('accountNumber', accountNumber).set('customerId', customerId);
    console.log(API_URL.BASE_URL+ API_URL)
    return this.http.get(API_URL.BASE_URL,
      {headers: this.headerOptions, params: parameters}
      );
  }
}
