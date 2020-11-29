import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListBeersComponent } from './beers/list-beers.component';
import { PageNotFoundComponent } from './beers/page-not-found.component';

const routes: Routes = [
  { path:'list', component: ListBeersComponent},
  { path:'', redirectTo:'list', pathMatch: 'full'},
  { path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
