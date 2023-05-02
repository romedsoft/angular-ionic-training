import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { EnvironmentUrlService } from './enviroment-url.service';


@Injectable({
  providedIn: 'root'
})
export class UserService{

  //readonly baseURL = `${this.envUrl.urlAddress}/api`;
  readonly baseURL = `https://localhost:5000`;

  constructor(private http: HttpClient,private envUrl: EnvironmentUrlService) { }

  public get = () => {
    return this.http.get(`${this.baseURL}/connect/userinfo`, ).pipe(map(model => {
      return model;
    }));
  }


}