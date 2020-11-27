import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup.component';
import { LAYOUT } from '../global/constants/layout';

const routes: Routes = [
  {
    path: 'signup', component: SignupComponent, data: { layout: LAYOUT.layout_header_footer }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignupRoutingModule { }
