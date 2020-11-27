import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlotsRoutingModule } from './plots-routing.module';
import { ListPlotsComponent } from './list-plots.component';


@NgModule({
  declarations: [ListPlotsComponent],
  imports: [
    CommonModule,
    PlotsRoutingModule
  ]
})
export class PlotsModule { }
