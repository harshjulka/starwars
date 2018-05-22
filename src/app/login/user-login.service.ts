import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserLoginService {
  loggedIn = false;
  redirectUrl: string;
  userName = '';
  constructor(private http: HttpClient) { }

  public signIn(name) {
    this.loggedIn = true;
    sessionStorage.setItem('loggedIn', 'true');
    this.userName = name;
    sessionStorage.setItem('name', name);
    return this.http.get('https://swapi.co/api/people/?search=' + this.userName);
  }

  getName() {
    return sessionStorage.getItem('name');
  }

  getLoginStatus() {
    return this.loggedIn = sessionStorage.getItem('loggedIn') === 'true';
  }
}

