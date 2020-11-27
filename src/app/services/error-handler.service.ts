import { HttpErrorResponse } from '@angular/common/http';
import { analyzeFileForInjectables } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  serviceUrl: string = 'http://localhost:8080';
  loggingLevel: string = 'debug';
  logUrl: string = 'http://localhost:8080';
  development: boolean  = true;

  constructor() { 
    this.serviceUrl = environment.baseUrl;
    this.loggingLevel = environment.logging;
    this.logUrl = environment.logUrl;
    this.development  = !environment.production;
  }
  
  handleNetworkError(errorResponse: HttpErrorResponse,component?:string,method?:string) {
    alert('Handle Network error called ');
    //Error event occurrs bcoz of client side or n/w error
    if (errorResponse.error instanceof ErrorEvent) {
        this.print(errorResponse,component,method);
    }
    else {
        //server side error
        this.print(errorResponse,component,method);
    }
    //return throwError('There is a problem with service. Please try again later.');
  }

  handleErrors(error: string, component?: string, method?: string){
    if(this.development){
      let e = error + 'in component->' + (component?component  + (method ? ' in method->' + method: ''):'');
      this.printString(e);
    }
  }

  private printString(error: string){
    if(this.development)
      console.error(error);
    else
      this.sendToBackened(error);
  }

  private print(error: HttpErrorResponse,component?:string,method?:string){
    if(this.development){
      console.error(`Error on network call in component->${component} and method->${method}`,error);
    }
    else{
      let obj : {[key:string]:any} = {};
      let errObject = Object.assign(obj,error);
      errObject.component = component;
      errObject.methodName = method;
      let jsonObject: string = JSON.stringify(errObject);
      this.sendToBackened(jsonObject);
    }
  }

  private sendToBackened(error: string){
    //imitating behaviour of production logging
    of(error).pipe(delay(2000)).subscribe().unsubscribe();
  }

}
