import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginService } from 'src/app/shared/services/login-service.service';
import { Router } from '@angular/router';
import { of } from 'rxjs/internal/observable/of';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let loginService: jasmine.SpyObj<LoginService>;
  let router: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    const loginServiceSpy = jasmine.createSpyObj('LoginService', ['login', 'logout']);
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        SharedModule,
        BrowserAnimationsModule,
      ],
      providers: [
        { provide: LoginService, useValue: loginServiceSpy },
        { provide: Router, useValue: routerSpy },
      ],
    }).compileComponents();

    component = TestBed.createComponent(LoginComponent).componentInstance;
    loginService = TestBed.inject(LoginService) as jasmine.SpyObj<LoginService>;
    router = TestBed.inject(Router) as jasmine.SpyObj<Router>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call login on LoginService and navigate to /home', () => {
    component.login();

    expect(loginService.login).toHaveBeenCalled(); // Verify login() was called
    expect(router.navigate).toHaveBeenCalledWith(['/home']); // Verify navigation to /home
  });
});
