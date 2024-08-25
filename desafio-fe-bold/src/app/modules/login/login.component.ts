import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/app/environment/environment';
import { LoginService } from 'src/app/shared/services/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  readonly version = environment.version;

  constructor(private router: Router, private loginService: LoginService) {
    this.loginService.logout();
  }

  login() {
    this.loginService.login();
    this.router.navigate(['/home']);
  }
}
