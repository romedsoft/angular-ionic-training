import { TestBed } from '@angular/core/testing';

import { AuthorizationGuard } from './auth.guard';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AuthorizationGuard', () => {
  let guard: AuthorizationGuard;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('OidcSecurityService', ['checkAuth']);

    TestBed.configureTestingModule({providers : [{provide: OidcSecurityService, useValue: spy}, HttpClientTestingModule ],});
    guard = TestBed.inject(AuthorizationGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
