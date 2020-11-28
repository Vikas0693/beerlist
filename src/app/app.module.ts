import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupModule } from './signup/signup.module';
import { LoginModule } from './login/login.module';
import { LayoutModule } from './layout/layout.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoadingSpinnerComponent } from './shared/ui-templates/loading-spinner.component';
import { HttpClientModule } from '@angular/common/http';
import { PlotsModule } from './modules/plots/plots.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    SharedModule,
    LayoutModule,
    SignupModule,
    LoginModule,
    PlotsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
