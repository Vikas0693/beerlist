import { Inject, Injectable, InjectionToken } from '@angular/core';
import { StorageService } from 'ngx-webstorage-service';
import { User } from 'src/app/model/user.model';


export const MY_SESSION_STORAGE = new InjectionToken<StorageService>('SESSION_STORAGE');

//we are not injecting below service at root level instead we are passing it to shared module and import sharedmodule in root module so that when lazy loaded modules gets loaded this service has only one instance
@Injectable()
export class BrowserStorageService {
  
  constructor(@Inject(MY_SESSION_STORAGE) private storage: StorageService) { }

  saveOrUpdateUser(user: User){
    this.storage.set('user',user);
  }

  removeUser(){
    this.storage.remove('user');
  }

  getUserInSession():User{
    return this.storage.get('user');
  }

}
