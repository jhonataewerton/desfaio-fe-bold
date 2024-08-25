import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})


export class LoginService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  loggedIn$ = this.loggedIn.asObservable();

  logout() {
    this.loggedIn.next(false);
  }

  login() {
    this.loggedIn.next(true);
  }
}
