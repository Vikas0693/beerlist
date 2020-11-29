import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Beer } from '../models/beer';
import { catchError, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private beerUrl:string="https://s3-ap-southeast-1.amazonaws.com/he-public-data/beercraft5bac38c.json";
  private images:string[] = [
    "https://s3-ap-southeast-1.amazonaws.com/he-public-data/csm_01_02-2019_Beer_Brewing_53ef2818e58285158.png",
    "https://s3-ap-southeast-1.amazonaws.com/he-public-data/Swedish_beerb2d62a0.jpg",
    "https://s3-ap-southeast-1.amazonaws.com/he-public-data/EVEREST_SPECIAL_LIMITED_EDITION_BEER_POKHARA_NEPAL_FEB_2013_28851073145129_201905131625260ec63f6.jpg",
    "https://s3-ap-southeast-1.amazonaws.com/he-public-data/https%20_specials-images.forbesimg.com_imageserve_5e325c56f133f400076b17b9_0x03b6f8ad.jpg",
    "https://s3-ap-southeast-1.amazonaws.com/he-public-data/low-calorie-beers-157981804958062d8.jpg",
  ]
  constructor(private http: HttpClient) { }


  getBeerList(): Observable<Beer[]>{
    return this.http.get<Beer[]>(this.beerUrl).pipe(tap(b=>{this.appendImages(b)})).pipe(catchError(this.handleError));
  }

  appendImages(beers:Beer[]){
    console.log('Appending images. of size = '+beers.length);
    let start:number=0;
    for(let i=0;i<beers.length;i++){
      if(start > this.images.length-1)
        start=0;
      beers[i].img = this.images[start];
      start++;
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
