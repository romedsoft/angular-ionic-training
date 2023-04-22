import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { EnvironmentUrlService } from './enviroment-url.service';


@Injectable({
  providedIn: 'root'
})
export class UserService{

  readonly baseURL = `${this.envUrl.urlAddress}/api`;

  constructor(private http: HttpClient,private envUrl: EnvironmentUrlService) { }

  public get = () => {
    return this.http.get(`${this.baseURL}/user/`, ).pipe(map(model => {
      return model;
    }));
  }


}