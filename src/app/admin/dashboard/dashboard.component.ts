import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/auth/authentication.service';
import { UserService } from 'src/app/services/user/user.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  currentUser: User;
  loading = false;
  users: User[];

  constructor(
    private userService: UserService,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }


  ngOnInit() {
    this.loading = true;
    this.userService.getAll().pipe(first()).subscribe(users => {
      this.loading = false;
      this.users = users;
    });
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

}
