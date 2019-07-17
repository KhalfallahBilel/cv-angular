import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user/user.service';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../services/auth/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 isAuth:boolean;
  constructor(private authService:AuthenticationService) { }

  ngOnInit() {    
    if(localStorage.getItem('currentUser')){
      this.isAuth=true;
    }
  }

}
