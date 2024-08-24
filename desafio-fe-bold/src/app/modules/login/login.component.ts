import { Component, ViewEncapsulation } from '@angular/core';
import { environment } from 'src/app/environment/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  readonly version = environment.version;

}
