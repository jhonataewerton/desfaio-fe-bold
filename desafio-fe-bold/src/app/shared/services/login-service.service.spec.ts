import { TestBed } from '@angular/core/testing';

import { LoginService } from './login-service.service';
import { take, tap } from 'rxjs';

describe('LoginService', () => {
  let service: LoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should emit false when logout is called', (done) => {
    service.logout();

    service.loggedIn$.pipe(take(1)).subscribe((loggedIn) => {
      expect(loggedIn).toBeFalse();
      done();
    });
  });

  it('should emit true when login is called', (done) => {
    service.loggedIn$
      .pipe(
        tap((loggedIn) => {
          if (loggedIn === false) {
            service.login();
          }
        }),
        take(1)
      )
      .subscribe((loggedIn) => {
        expect(loggedIn).toBeTrue();
        done();
      });
  });
});
