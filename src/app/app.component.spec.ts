import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { OidcSecurityService } from 'angular-auth-oidc-client';

describe('AppComponent', () => {
  let oidcSecurityService: OidcSecurityService;
  let valueServiceSpy: jasmine.SpyObj<OidcSecurityService>;

  
  beforeEach(async () => {

    const spy = jasmine.createSpyObj('OidcSecurityService', ['isAuthenticated']);
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers : [{provide: OidcSecurityService, useValue: spy}, HttpClientTestingModule ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    oidcSecurityService = TestBed.inject(OidcSecurityService);
    valueServiceSpy = TestBed.inject(OidcSecurityService) as jasmine.SpyObj<OidcSecurityService>;
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
