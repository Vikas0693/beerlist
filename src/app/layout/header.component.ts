import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  navBarCollapsed:boolean=false;
  userInSession:User = null;

  constructor(private userService:UserService) { 
    console.error('Header constructor called which should not be happening.');
  }

  ngOnInit(): void {
    this.userInSession = this.userService.user;
  }

}
