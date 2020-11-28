import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { throwError } from 'rxjs';
import { LAYOUT } from './global/constants/layout';
import { User } from './model/user.model';
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

  constructor(private _router: Router, private _activatedRoute: ActivatedRoute,private userService:UserService, private errorHandler: ErrorHandlerService){
  }

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
  }
}
