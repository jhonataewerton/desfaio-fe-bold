import { Component, OnInit } from '@angular/core';
import { LoginService } from './shared/services/login-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isLogged!: boolean;

  constructor(private loginService: LoginService) {}
  ngOnInit(): void {
    this.loginService.loggedIn$.subscribe((status: boolean) => {
      this.isLogged = status;
    });
  }
}
