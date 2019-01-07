import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { JwtHelper, tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {
  constructor(private http: Http) {
  }

  login(credentials) { 
   return this.http.post('/api/authenticate', 
      JSON.stringify(credentials)).
      map(response =>{
        let result=response.json();
        if(result && result.token){
          localStorage.setItem('token',result.token);
          return true;
        }
        return false;
      });
  }

  logout() { 
    localStorage.removeItem('token');
  }

  isLoggedIn() { 
    // let token =localStorage.getItem('token');
    // if(!token)
    //   return false;
    // let jwtHelper = new JwtHelper();
    // let tokenExpDate=jwtHelper.getTokenExpirationDate(token);
    // let isTokenExpired=jwtHelper.isTokenExpired(token);

    // return !isTokenExpired; 
    // We can simply call the below method from jwt which does exactly above function.

    return tokenNotExpired();
  }

  getCurrentUser(){
    let token =localStorage.getItem('token');
    if(!token)
      return null;

    return new JwtHelper().decodeToken(token);

  }

}

