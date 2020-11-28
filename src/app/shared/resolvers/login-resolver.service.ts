import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { User } from 'src/app/model/user.model';
import { UserService } from '../../services/user.service';

@Injectable()
export class LoginResolverService implements Resolve<User | string>{

  constructor(private userService: UserService) { }
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User | string>{
    return this.userService.getLoggedInUser().pipe(
      tap(obj => console.log('Object found in LogginResolver = ',obj)),
      catchError(error => of('User Not LoggedIn.'))
    );
  }
}
