import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { LAYOUT } from '../global/constants/layout';

const routes: Routes = [
  {
    path: 'login', component: LoginComponent, data: { layout: LAYOUT.layout_header_footer }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
