import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
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
