import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { AuthenticationService } from '../services/auth/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate  {
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
) { }

canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.authenticationService.currentUserValue;
    if (currentUser) {
        // logged in so return true
        return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
}
}
