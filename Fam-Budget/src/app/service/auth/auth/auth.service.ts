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
    return this.http.post(API_URL.BASE_URL+API_URL.SIGNUP,
      { 
        firstname: formDetails.value.firstname,
        lastname: formDetails.value.lastname,
        gender: formDetails.value.gender,
        mobile: formDetails.value.mobile,
        email: formDetails.value.email,
        relationship: formDetails.value.relationship,
        pannumber: formDetails.value.pannumber,
        age: formDetails.value.age,
        files: formDetails.value.file
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

  confirmPassword(username: any,newPassword: any, password: any ): Observable<any> {
    return this.http.post(API_URL.BASE_URL + API_URL.CONFIRM_PASSWORD,
      { username: username, password: password, newPassword: newPassword }, 
      {headers: this.headerOptions}
      );
  }

  resetTemporaryPassword(username: any,newPassword: any, code: any ): Observable<any> {
    return this.http.post(API_URL.BASE_URL + API_URL.RESET_TEMPORARY,
      { username: username, code: code, newPassword: newPassword }, 
      {headers: this.headerOptions}
      );
  }

  logout() {
    localStorage.clear();
    sessionStorage.clear();
  }

  // resetPassword(oldPassword, newPassword) {

  // }


  getMovieList(offset: any, limit: any, sortOption: any, languagesArray: any[]): Observable<any> {
    const parameters = new HttpParams().set('offset', offset).set('limit', limit).set('orderBy', sortOption);
    return this.http.post(API_URL.BASE_URL + API_URL.SIGNUP,
      { languages: languagesArray},
      {headers: this.headerOptions, params: parameters}
      );
  }

  getFilterOptions(): Observable<any> {
    return this.http.get(API_URL.BASE_URL + API_URL.SIGNUP,
      {headers: this.headerOptions}
      );
  }


}
