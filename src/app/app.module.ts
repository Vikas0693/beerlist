import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ListBeersComponent } from './beers/list-beers.component';
import { DisplayBeerComponent } from './beers/display-beer.component';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './beers/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ListBeersComponent,
    DisplayBeerComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
