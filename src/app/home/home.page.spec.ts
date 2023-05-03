import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PetServiceService } from '../shared/services/pet.service';
import { PipesModule } from '../shared/modules/pipes.module';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let oidcSecurityService: OidcSecurityService;
  let valueServiceSpy: jasmine.SpyObj<OidcSecurityService>;

  let petService: PetServiceService;
  let petServiceSpy: jasmine.SpyObj<PetServiceService>;

  beforeEach(async () => {

    const spy = jasmine.createSpyObj('OidcSecurityService', ['revokeAccessToken','revokeRefreshToken','logoff']);
    const petServicespy = jasmine.createSpyObj('PetService', ['getTopFive']);

    await TestBed.configureTestingModule({
      declarations: [HomePage],
      providers : [{provide: OidcSecurityService, useValue: spy},{provide: PetServiceService, useValue: petServicespy}, HttpClientTestingModule ],
      imports: [IonicModule.forRoot(), PipesModule]
    }).compileComponents();

    oidcSecurityService = TestBed.inject(OidcSecurityService);
    valueServiceSpy = TestBed.inject(OidcSecurityService) as jasmine.SpyObj<OidcSecurityService>;

    petService = TestBed.inject(PetServiceService);
    petServiceSpy = TestBed.inject(PetServiceService) as jasmine.SpyObj<PetServiceService>;


    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
