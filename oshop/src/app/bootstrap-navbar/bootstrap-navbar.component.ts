import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../auth-service.service';
import { UserService } from '../user.service';
import { AppUser } from '../models/app-user';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'bootstrap-navbar',
  templateUrl: './bootstrap-navbar.component.html',
  styleUrls: ['./bootstrap-navbar.component.css']
})
export class BootstrapNavbarComponent implements OnInit {
appUser: AppUser;
  constructor(private auth: AuthService) {
   /*  afAuth.authState.subscribe(user => {
     this.user = user;
    }); */

    auth.appUser$.subscribe(appUser => this.appUser = appUser);

  }

  ngOnInit() {
  }

  logout() {
    this.auth.logout();
  }

}
