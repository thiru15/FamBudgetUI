import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
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

   getTransactions(accountNumber: any, customerId: any, filterParams: FormGroup): Observable<any> {
     console.log(filterParams.value.startDate)
    const parameters = new HttpParams().set('accountNumber', accountNumber).set('customerId', customerId)
      .set('startDate', filterParams.value.startDate)
      .set('endDate', filterParams.value.endDate)
      .set('transactionID', filterParams.value.transactionID)
      .set('merchant', filterParams.value.merchant)
      .set('accountType', filterParams.value.accountType)
      .set('transactionType', filterParams.value.transactionType);
      
    const url = API_URL.BASE_URL + API_URL.GET_TRANSACTIONS
    return this.http.get(url,
      {headers: this.headerOptions, params: parameters}
      );
  }

  getSecondaryUsers(accountNumber: any): Observable<any> {
  //  const parameters = new HttpParams().set('accountNumber', accountNumber)

   const url = API_URL.BASE_URL + API_URL.GET_SECONDARY_USERS
   return this.http.post(url,
     {'accountNumber': accountNumber}, 
     {headers: this.headerOptions}
     );
 }

 getCards(accountNumber: any, customerId: any, secondaryId: any, senderSecondary: any): Observable<any> {
   const parameters = new HttpParams().set('accountNumber', accountNumber).set('customerId', customerId).set('secondaryId', secondaryId).set('senderSecondary', senderSecondary)

   const url = API_URL.BASE_URL + API_URL.GET_CARDS
   return this.http.get(url,
     {headers: this.headerOptions, params: parameters}
     );
 }



}
