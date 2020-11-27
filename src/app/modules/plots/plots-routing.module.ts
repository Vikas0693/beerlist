import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LAYOUT } from 'src/app/global/constants/layout';
import { ListPlotsComponent } from './list-plots.component';

const routes: Routes = [
  { 
    path:'list-plots', component: ListPlotsComponent, data: { layout: LAYOUT.layout_header_navigationLeft_footer }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlotsRoutingModule { }
