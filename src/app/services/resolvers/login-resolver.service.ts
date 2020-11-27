import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from 'src/app/model/user.model';
import { UserService } from '../user.service';

@Injectable()
export class LoginResolverService implements Resolve<User | string>{

  constructor(private userService: UserService) { }
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User | string>{
    return this.userService.getLoggedInUser().pipe(
      catchError(error => of(error))
    );
  }
}
