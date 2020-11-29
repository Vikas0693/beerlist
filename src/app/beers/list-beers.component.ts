import { Component, OnInit } from '@angular/core';
import { Beer } from '../models/beer';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-list-beers',
  templateUrl: './list-beers.component.html',
  styleUrls: ['./list-beers.component.css']
})
export class ListBeersComponent implements OnInit {

  private _searchTerm: string;
  private beerList: Beer[];
  filteredBeerList: Beer[];
  error:string;

  public get searchTerm(): string {
    return this._searchTerm;
  }

  public set searchTerm(value: string) {
    this._searchTerm = value;
    if(this.beerList && this.beerList.length>0)
      this.filteredBeerList = this.filterBeer(this._searchTerm);
  }

  //returns new filtered array
  private filterBeer(searchParam: string): Beer[]{
    return this.beerList.filter(beer => beer.name.toLowerCase().indexOf(searchParam.toLowerCase())!=-1);
  }

  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
    this.apiService.getBeerList().subscribe(resp=>{
      this.beerList = resp;
      this.filteredBeerList = Object.assign([],this.beerList);
      
    },
    err=>{this.error=err});
  }

}
