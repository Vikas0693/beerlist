import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserStorageService, MY_SESSION_STORAGE } from './services/browser-storage.service';
import { SESSION_STORAGE } from 'ngx-webstorage-service';
import { LoadingSpinnerComponent } from './ui-templates/loading-spinner.component';
import { LoginResolverService } from './resolvers/login-resolver.service';

@NgModule({
  providers: [
    { provide: MY_SESSION_STORAGE, useExisting: SESSION_STORAGE },
      BrowserStorageService,
      LoginResolverService
    ],
    declarations: [
      LoadingSpinnerComponent
  
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
