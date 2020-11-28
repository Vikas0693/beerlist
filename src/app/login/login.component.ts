import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { UserAuthService } from '../services/user-auth.service';
import { Router, ActivatedRoute } from '@angular/router'
import { BrowserStorageService } from '../shared/services/browser-storage.service';
import { User } from '../model/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginObject = {
    email: 'abc@gmail.com',
    password: '123123'
  }
  constructor(private authService: UserAuthService, private userService: UserService,
    private _route: Router, private activatedRoute: ActivatedRoute, private sessionStorageService:BrowserStorageService) {
    console.log('Login Constructor called.');
    const userInSession: User = this.activatedRoute.snapshot.data['loggedInUser'];
    console.error('typeof userInSession = '+(typeof userInSession)+" and userInSession = "+userInSession);
    if(typeof userInSession === 'string'){
      alert('User not in session, so staying on LoginComponent only.');
    }
    else{
      alert('Found LoggedIn user from LoginResolver so redirecting.');
      this._route.navigate(['/list-plots']);
    }
  }

  ngOnInit(): void {
  }

  logout() {
    if (this.userService.user) {
      this.userService.logout().subscribe(response => {
        alert('You have been successfully logged out');
        this._route.navigate(['/']);
      },
        err => alert(err)
      );
    }
    else {
      alert('You have been already logged out');
      return;
    }
  }

  login() {
    console.log('already loggedin user  ',this.userService.user);
    if (this.userService.user) {
      alert('You are already loggedin.Redirecting code added in login component.ts');
      this._route.navigate(['list-plots']);
      return;
    }
    if (this.loginObject && this.loginObject.email && this.loginObject.password) {
      let parameter: string = '';
      if (this.activatedRoute.snapshot.queryParamMap.has('redirectTo')) {
         parameter = this.activatedRoute.snapshot.queryParamMap.get('redirectTo');
      }

      this.userService.login(this.loginObject.email, this.loginObject.password).subscribe(response => {
        console.log('Setting User in session.');
        console.log("All routes = ", this._route.config + " and redirectTo = " + parameter);
        if (parameter && this._route.config.findIndex(r => r.path == parameter) != -1) {
          alert('path in login url found redirecting to that page and setting user in sessionStorage.');
          this._route.navigate([parameter]);
        }
        else {
          this._route.navigate(['list-plots']);
        }
      },
      error => alert('Error on Login'));

    }
    else {
      alert('Enter all fields in login.');
      return;
    }
  }
}
