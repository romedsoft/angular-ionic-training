import { Component, OnInit } from '@angular/core';
import { LoginResponse, OidcSecurityService } from 'angular-auth-oidc-client';
import { UserService } from '../shared/services/user.service';
import { AuthService } from '../shared/services/auth.service';
import { PetServiceService } from '../shared/services/pet.service';
import { Observable } from 'rxjs';
import { PetModel } from '../shared/models/pet/pet.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {


  pets$!: Observable<Array<PetModel>>;

  constructor(public oidcSecurityService: OidcSecurityService, 
    public petService : PetServiceService, private authService : AuthService) {}

  ngOnInit() {
    this.pets$  = this.petService.getTopFive();
  }


  logout() {
    this.authService.setAsNoAuthenticated();
    this.oidcSecurityService.revokeAccessToken().subscribe((result) => {console.log(result); });
    this.oidcSecurityService.revokeRefreshToken().subscribe((result) => {console.log(result); });
    this.oidcSecurityService.logoff().subscribe((result) => {console.log(result); });

  }

}
