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
      {username, password},
      {headers: this.headerOptions}
    );
  }

  signup(formDetails: any): Observable<any> {
    return this.http.post('http://localhost:3000/dev/auth/signup',
      {files: formDetails.value.file},
      {headers: this.headerOptions}
    );
  }

  // forgotPassword(email): Observable<any> {
  //   return from(Auth.forgotPassword(email));
  // }

  // confirmPassword(code, newPassword, email): Observable<any> {
  //   return from(Auth.forgotPasswordSubmit(email, code, newPassword));
  // }

  // resetTemporaryPassword(user, newPassword): Observable<any> {
  //   return from(Auth.completeNewPassword(user, newPassword));
  // }

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
