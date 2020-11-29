import { Component, Input, OnInit } from '@angular/core';
import { Beer } from '../models/beer';

@Component({
  selector: 'app-display-beer',
  templateUrl: './display-beer.component.html',
  styleUrls: ['./display-beer.component.css']
})
export class DisplayBeerComponent implements OnInit {

  private _beerObject: Beer;
  public get beerObject(): Beer {
    return this._beerObject;
  }
  @Input()
  public set beerObject(value: Beer) {
    this._beerObject = value;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
