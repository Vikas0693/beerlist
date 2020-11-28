import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { LAYOUT } from '../global/constants/layout';
import { LoginResolverService } from '../shared/resolvers/login-resolver.service';

const routes: Routes = [
  {
    path: 'login', component: LoginComponent, data: { layout: LAYOUT.layout_header_footer }, resolve:{ loggedInUser: LoginResolverService }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
