import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    // if they aren't logged in then it sends them to the login page
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let lastLoggedIn: string;

      lastLoggedIn = localStorage.getItem('loggedIn');
      if (lastLoggedIn) {
        return true
      } else {
        this.router.navigate(['/login'])
        return false
      }
  }
  
}
