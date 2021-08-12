import { Injectable } from '@angular/core';
import { Subject, Observable, from } from 'rxjs';
import { environment } from 'src/environments/environment';
import { API_URL  } from '../../../constants/url.contants';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  headerOptions: HttpHeaders;
  constructor(private http: HttpClient) {
    this.headerOptions = new HttpHeaders({
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    });
  }
  
  public authState$: Subject<boolean> = new Subject();

  // async getCurrentUserSession(): Promise<CognitoUserSession | null> {
  //   return await Auth.currentSession().then((currentUserSession: CognitoUserSession) => {
  //     return currentUserSession;
  //   }).catch((err) => {
  //     return null;
  //   });
  // }

  login(username: string, password: string): Observable<any> {
    return this.http.post(API_URL.BASE_URL + API_URL.LOGIN,
      {'username': username, 'password': password},
      {headers: this.headerOptions}
    );
  }

  signup(formDetails: any): Observable<any> {
    return this.http.post(
      // 'http://localhost:3000/dev/auth/signup',
      API_URL.BASE_URL+API_URL.SIGNUP,
      { 
        firstName: formDetails.value.firstname,
        lastName: formDetails.value.lastname,
        gender: formDetails.value.gender,
        mobile: formDetails.value.mobile,
        email: formDetails.value.email,
        bcity: 'City-ABC',
        panNumber: formDetails.value.pannumber,
        age: formDetails.value.age,
        files: formDetails.value.file,
        role: 'Primary-Account-Holder'
    },
      {headers: this.headerOptions}
    );
  }

  forgotPassword(username: any): Observable<any> {
    return this.http.post(API_URL.BASE_URL + API_URL.FORGOT_PASSWORD,
      { username: username }, 
      {headers: this.headerOptions}
      );
  }

  confirmPassword(username: any,code: any, password: any ): Observable<any> {
    return this.http.post(API_URL.BASE_URL + API_URL.CONFIRM_PASSWORD,
      { username: username, code: code, newPassword: password }, 
      {headers: this.headerOptions}
      );
  }

  resetTemporaryPassword(username: any,newPassword: any, currentPassword: any ): Observable<any> {
    return this.http.post(API_URL.BASE_URL + API_URL.RESET_TEMPORARY,
      { username: username, password: currentPassword, newPassword: newPassword }, 
      {headers: this.headerOptions}
      );
  }

  logout() {
    localStorage.clear();
    sessionStorage.clear();
  }

  // resetPassword(oldPassword, newPassword) {

  // }

}
