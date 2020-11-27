import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { throwError } from 'rxjs';
import { LAYOUT } from './global/constants/layout';
import { ErrorHandlerService } from './services/error-handler.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'PlotBooking';
  layout_constant = LAYOUT;
  layoutLoaded:number;
  dataAvailable: boolean;

  constructor(private _router: Router, private _activatedRoute: ActivatedRoute,private userService:UserService, private errorHandler: ErrorHandlerService){}

  ngOnInit(): void {
    //subscribe to route revent and decide which layout to load
    this._router.events.subscribe(event => {
      if(event instanceof NavigationEnd){
        if(this._activatedRoute.firstChild.snapshot.data){
          this.layoutLoaded = this._activatedRoute.firstChild.snapshot.data.layout;
        }
        else{
          throwError('Not able to load layout based on route layout data.');
        }
      }
    });
    this.userService.getLoggedInUser().subscribe(resp=>{
      this._router.navigate(['/plots']);
      //direct user to 'plots' if he is in session

    },
    err => this.errorHandler.handleNetworkError(err,'AppComponent','ngOnInit')
    ).add(() => {this.dataAvailable=true;});//this add acts as finally block
  }
}
