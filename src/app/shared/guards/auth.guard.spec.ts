import { TestBed } from '@angular/core/testing';
import { RouterStateSnapshot, Router, ActivatedRouteSnapshot, RouterModule } from '@angular/router';
import { AuthorizationGuard } from './auth.guard';
import { OidcSecurityService, LoginResponse } from 'angular-auth-oidc-client';
import {RouterTestingModule} from "@angular/router/testing";
import { HttpClientTestingModule, } from '@angular/common/http/testing';
import { Observable, delay, map, of } from 'rxjs';
import { AppRoutingModule } from 'src/app/app-routing.module';


function fakeRouterState(url: string): RouterStateSnapshot {
  return {
    url,
  } as RouterStateSnapshot;
}


function fakeCheckAuth() : Observable<LoginResponse> {

  const loginResp : LoginResponse = {
    isAuthenticated: true,
    userData: undefined,
    accessToken: '',
    idToken: '',
    configId: ''
  }
  let obs$ = of<LoginResponse>(loginResp).pipe(delay(500), map((x: LoginResponse) => x ));
  return obs$;
}

function fakeNegativeCheckAuth() : Observable<LoginResponse> {

  const loginResp : LoginResponse = {
    isAuthenticated: false,
    userData: undefined,
    accessToken: '',
    idToken: '',
    configId: ''
  }
  let obs$ = of<LoginResponse>(loginResp).pipe(delay(500), map((x: LoginResponse) => x ));
  return obs$;
}


describe('AuthorizationGuard', () => {
  

  beforeEach(() => {
    oidcSecurityServicespy = jasmine.createSpyObj<OidcSecurityService>('OidcSecurityService', ['checkAuth']);

    routerSpy = jasmine.createSpyObj<Router>('Router', ['navigate','parseUrl']);
    serviceStub = {}; // [2]

    TestBed.configureTestingModule({
      providers : [{provide: OidcSecurityService, useValue: oidcSecurityServicespy}, HttpClientTestingModule ],
      imports : [ AppRoutingModule, RouterTestingModule, RouterModule]
    });
    guard = new AuthorizationGuard(oidcSecurityServicespy, routerSpy);;
  });

  const dummyRoute = {} as ActivatedRouteSnapshot;
  let routerSpy : jasmine.SpyObj<Router>;
  let oidcSecurityServicespy: jasmine.SpyObj<OidcSecurityService>;
  let guard : AuthorizationGuard;
  let serviceStub : Partial<OidcSecurityService>;
  const fakeUrls = ['/home'];

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  describe('when the user is logged in', () => {
    beforeEach(() => {
      oidcSecurityServicespy.checkAuth.and.returnValue(fakeCheckAuth());

    });
    
    fakeUrls.forEach((fakeUrl) => {
      
      it('grants access', (done) => {
        guard.canActivate(dummyRoute, fakeRouterState(fakeUrl)).subscribe((resp) => {
          expect(resp).toEqual(true);
          done();
        }); 

      });

    });

  });

  describe('when the user is logged out', () => {
    beforeEach(() => {
      oidcSecurityServicespy.checkAuth.and.returnValue(fakeNegativeCheckAuth());

    });
    
    fakeUrls.forEach((fakeUrl) => {
      
      it('rejects access', (done) => {
        guard.canActivate(dummyRoute, fakeRouterState(fakeUrl)).subscribe((resp) => {
          
          expect(routerSpy.parseUrl).toHaveBeenCalledWith('/account/login');
          done();
        }); 

      });

    });

  });
  
});
