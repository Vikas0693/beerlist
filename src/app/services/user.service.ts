import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, delay, map, tap } from 'rxjs/operators';
import { User } from '../model/user.model';
import { BrowserStorageService } from '../shared/services/browser-storage.service';
import { ErrorHandlerService } from './error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: string = "http://localhost:8080";
  //below user represent user in session
  private _user: User;
  public get user(): User {
    return this._user;
  }
  public set user(value: User) {
    this._user = value;
  }
  

  constructor(private http: HttpClient, private errorHandler: ErrorHandlerService, private storageService: BrowserStorageService) { }

  getLoggedInUser(): Observable<User> {
    console.log('getLoggedInUser called.');
    const userInSession: User = this.storageService.getUserInSession();
    if (userInSession) {
      
      return of(userInSession).pipe(
        delay(1000),
        map(u => this.user = u),
        tap(res => console.log('User found in session', res)));

    }
    else {
      alert('UserService => getLoggedInUser returning of()'); 
      /*return this.http.get<User>(`${this.baseUrl}/sessionUser`).
      pipe(map(u=>{this.user=u, this.storageService.saveOrUpdate(u)})).
      pipe(tap(res => console.log('Logged In User',res))).
      pipe(catchError(this.handleError));*/
      return throwError('User not in session');
    }
  }

  signup(user: User): Observable<User> {
    user.id = 1;
    return of(user).pipe(delay(2000)).pipe(catchError(this.handleError));
    /*return this.http.post<User>(`${this.baseUrl}/signup`,user,{
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).pipe(catchError(this.handleError));*/
  }

  login(email: string, password: string): Observable<User> {
    this.user = {
      email: email,
      id: 1,
      contact: '8769303901',
      name: 'Vikas Sharma'
    }
    this.storageService.saveOrUpdateUser(this.user);
    return of(this.user).pipe(delay(1000));

    /*var postUser = {
      'email': email,
      'password':password
    }
    return this.http.post<User>(`${this.baseUrl}/signup`,postUser,{
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).pipe(catchError(this.handleError));*/
  }

  logout(): Observable<void> {
    if (this.user) {
      const uri = `${this.baseUrl}/logout?id=${this.user.id}&email=${this.user.email}`;
      this.user = null;
      return of();//this.http.get<void>(uri).pipe(catchError(this.handleError));
    }
    else {
      this.errorHandler.handleErrors('User not logged in but still clicked logout', 'UserService', 'logout');
      return throwError('You have been already logged out.');
    }
  }

  private handleError(errorResponse: HttpErrorResponse) {
    //Error event occurrs bcoz of client side or n/w error
    if (errorResponse.error instanceof ErrorEvent) {
      console.error('Client side error : ' + errorResponse.error.message);
    }
    else {
      //server side error
      console.error('Server sidde error : ', errorResponse);
    }
    return throwError('There is a problem with service. Please try again later.');
  }


}
