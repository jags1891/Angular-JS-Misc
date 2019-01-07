import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src';
import { AuthService } from 'app/services/auth.service';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGaurd implements CanActivate{

  constructor(
    private authService:AuthService,
    private router:Router
      ) { }
  
  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot){
    if(this.authService.isLoggedIn()) return true;
    this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
    return false;
  }
}
