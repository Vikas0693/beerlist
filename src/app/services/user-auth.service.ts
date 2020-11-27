import { analyzeFileForInjectables } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor(private userService:UserService) { }



 

}
