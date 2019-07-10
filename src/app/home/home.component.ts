import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user/user.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  constructor() { }

  ngOnInit() {
    
  }

}
