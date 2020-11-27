import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FooterComponent } from './footer.component';
import { HeaderComponent } from './header.component';
import { NavigationLeftComponent } from './navigation-left.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    NavigationLeftComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule
    
  ],
  exports:[
    FooterComponent,
    HeaderComponent,
    NavigationLeftComponent,
    
  ]
})
export class LayoutModule { }
