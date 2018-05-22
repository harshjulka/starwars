import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserLoginService } from './login/user-login.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor (private character: UserLoginService, private router: Router) {
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.character.getLoginStatus()) {
      return true;
    } else {
      this.redirect();
      return false;
    }
  }

  redirect() {
    this.router.navigate(['login']);
  }
}
