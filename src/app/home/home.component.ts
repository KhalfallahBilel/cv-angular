import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 isAuth:boolean;
  constructor() { }

  ngOnInit() {    
    if(localStorage.getItem('currentUser')){
      this.isAuth=true;
      console.log(this.isAuth);
      console.log(localStorage.getItem('currentUser'));
      
    }
  }

}
