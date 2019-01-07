import { Injectable } from '@angular/core';
import { Router,CanActivate } from '@angular/router';
import { AuthService } from 'app/services/auth.service';


@Injectable()
export class AdminAuthgaurd implements CanActivate {

  constructor(
    private router:Router,
    private authService:AuthService
  ) { }

  canActivate(){
    if(this.authService.getCurrentUser() && this.authService.getCurrentUser().admin) return true;
    this.router.navigate(['/no-access']);
    return false;

  }

}
