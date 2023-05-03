import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoginPage } from './login.page';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { OidcSecurityService } from 'angular-auth-oidc-client';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;

  beforeEach(waitForAsync(() => {

    const spy = jasmine.createSpyObj('OidcSecurityService', ['authorize']);

    TestBed.configureTestingModule({
      declarations: [ LoginPage ],
      providers : [{provide: OidcSecurityService, useValue: spy}, HttpClientTestingModule ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
