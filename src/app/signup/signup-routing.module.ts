import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from '../layout/main-layout.component';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from './signup.component';

const routes: Routes = [
  { path: '', component: MainLayoutComponent,
    children: [
      { path:'signup',component: SignupComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignupRoutingModule { }
