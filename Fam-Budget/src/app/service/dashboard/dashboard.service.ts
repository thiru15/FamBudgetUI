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
      { headers: this.headerOptions, params: parameters }
    );
  }

  getSecondaryUsers(accountNumber: any): Observable<any> {
    //  const parameters = new HttpParams().set('accountNumber', accountNumber)

    const url = API_URL.BASE_URL + API_URL.GET_SECONDARY_USERS
    return this.http.post(url,
      { 'accountNumber': accountNumber },
      { headers: this.headerOptions }
    );
  }
  sendMoney(accountNumber: any, secondaryId: number, amount: number): Observable<any> {
    //  const parameters = new HttpParams().set('accountNumber', accountNumber)
    const url = API_URL.BASE_URL + API_URL.SEND_MONEY
    return this.http.post(url,
      { 'accountNumber': accountNumber, 'amount': amount, 'secondaryId': secondaryId },
      { headers: this.headerOptions }
    );
  }

  getCards(accountNumber: any, customerId: any, secondaryId: any, senderSecondary: any): Observable<any> {
    const parameters = new HttpParams().set('accountNumber', accountNumber).set('customerId', customerId).set('secondaryId', secondaryId).set('senderSecondary', senderSecondary)

    const url = API_URL.BASE_URL + API_URL.GET_CARDS
    return this.http.get(url,
      { headers: this.headerOptions, params: parameters }
    );
  }

  createCard(customerId: any, accountNumber: any, senderSecondary: any): Observable<any> {
    const url = API_URL.BASE_URL + API_URL.CREATE_CARD
    return this.http.post(url,
      {
        'customerId': customerId,
        'accountNumber': accountNumber,
        'senderSecondary': senderSecondary
      },
      { headers: this.headerOptions }
    );
  }

  createSecondaryUser(accountNumber: any, form: FormGroup): Observable<any> {
    const url = API_URL.BASE_URL + API_URL.SECONDARY_SIGNUP
    const obj = {
      accountNumber: accountNumber,
      firstName: form.value.firstname,
      lastName: form.value.lastname,
      email: form.value.email,
      mobile: form.value.mobile,
      gender: form.value.gender,
      relationship: form.value.relationship,
      isKycVerified: form.value.isKycVerified,
      bcity: form.value.bcity || '',
      panNumber: form.value.pannumber,
      isMinor: form.value.isMinor,
      fundsAllocated: form.value.fundsAllocated,
    }
    console.log("Object ", obj);
    return this.http.post(url,
      {
        accountNumber: accountNumber,
        firstName: form.value.firstname,
        lastName: form.value.lastname,
        email: form.value.email,
        mobile: form.value.mobile,
        gender: form.value.gender,
        relationship: form.value.relationship,
        isKycVerified: form.value.isKycVerified,
        bcity: form.value.bcity || 'chennai',
        panNumber: form.value.pannumber,
        isMinor: form.value.isMinor,
        fundsAllocated: form.value.fundsAllocated
      },
      { headers: this.headerOptions }
    );
  }

  getBalance(accountNumber: string | number | boolean, customerId?: any, secondaryId?: any): Observable<any> {
    const parameters = new HttpParams().set('accountNumber', accountNumber).set('customerId', customerId).set('secondaryId', secondaryId)
    const url = API_URL.BASE_URL + API_URL.GET_BALANCE
    return this.http.get(url,
      { headers: this.headerOptions, params: parameters }
    );
  }

  getRecentTransactions(accountNumber: any): Observable<any> {
    const parameters = new HttpParams().set('id', accountNumber)
    const url = API_URL.BASE_URL + API_URL.GET_RECENT_TRANSACTION
    return this.http.get(url,
      { headers: this.headerOptions, params: parameters }
    );
  }

  getYearlyTransactions(accountNumber: string | number | boolean, secondaryId: any): Observable<any> {
    const parameters = new HttpParams().set('accountNumber', accountNumber)
    if (secondaryId) { parameters.set('secondaryId', secondaryId) }
    const url = API_URL.BASE_URL + API_URL.GET_MONTHLY_REPORTS
    return this.http.get(url,
      { headers: this.headerOptions, params: parameters }
    );
  }

  createPolicy(customerId: any, accountNumber: any, isSecondaryHolder: any, secondaryId: any, expirationDate: any, spendLimit: any): Observable<any> {
    const url = API_URL.BASE_URL + API_URL.CREATE_POLICY
    return this.http.post(url,
      {
        'customerId': customerId,
        'accountNumber': accountNumber,
        'isSecondaryHolder': isSecondaryHolder,
        'expirationDate': expirationDate,
        'spendLimit': spendLimit,
        'secondaryId': secondaryId
      },
      { headers: this.headerOptions }
    );
  }

  getPolicies(accountNumber: any, customerId: any): Observable<any> {
    const parameters = new HttpParams().set('accountNumber', accountNumber).set('customerId', customerId)
    const url = API_URL.BASE_URL + API_URL.GET_POLICY
    return this.http.get(url,
      { headers: this.headerOptions, params: parameters }
    );
  }

  updatePolicy(accountNumber: any, policyId: any, customerId: any, expirationDate: any, spendLimit: any): Observable<any> {
    const url = API_URL.BASE_URL + API_URL.UPDATE_POLICY
    return this.http.put(url,
      {
        'policyId': policyId, 'accountNumber': accountNumber, 'customerId': customerId,
        'expirationDate': expirationDate,
        'spendLimit': spendLimit
      },
      { headers: this.headerOptions }
    );
  }


  downloadTransactions(accountNumber: any, customerId: any, secondaryId: any): Observable<any> {
    const parameters = new HttpParams().set('accountNumber', accountNumber).set('customerId', customerId).set('secondaryId', secondaryId)

    const url = API_URL.BASE_URL + API_URL.GET_DOWNLOADS
    return this.http.get(url,
      { headers: this.headerOptions, params: parameters }
    );

 }
 
 setPin(accountNumber: any, pin: any,cardNumber: any): Observable<any> {
  //const parameters = new HttpParams().set('accountNumber', accountNumber).set('customerId', cardNumber).set('pin', pin)

  const url = API_URL.BASE_URL + API_URL.SET_PIN
  return this.http.post(url,
    { 'cardNumber': cardNumber,
        'accountNumber': accountNumber,
        'pin': pin
      },
    {headers: this.headerOptions}
    );

 }


  deleteSecondaryUser(secondaryId: any, isActive: boolean): Observable<any> {
    const url = API_URL.BASE_URL + API_URL.DELETE_SECONDARY_USER
    return this.http.delete(url,
      {
        headers: this.headerOptions,
        body: { "secondaryId": secondaryId, "isActive": isActive }
      },
    );
  }
  /// http://localhost:3000/dev/accountHolder/get?customerId=10000007

  getPrimaryUserDetails(accountNumber: any, customerId: any) {
    const parameters = new HttpParams().set('accountNumber', accountNumber).set('customerId', customerId)
    const url = API_URL.BASE_URL + API_URL.GET_PRIMARY_ACCOUNT_HOLDER
    return this.http.get(url,
      {
        headers: this.headerOptions, params: parameters
      },
    );
  }

  getKycUrls(customerId: any){
    const parameters = new HttpParams().set('customerId', customerId)
    const url = API_URL.BASE_URL + API_URL.GET_KYC_URLS
    return this.http.get(url,
      {
        headers: this.headerOptions, params: parameters
      },
    );
  }

}
