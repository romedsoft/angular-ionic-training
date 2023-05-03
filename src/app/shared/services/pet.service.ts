import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, map } from 'rxjs/operators';
import { EnvironmentUrlService } from './enviroment-url.service';
import { Observable, of } from 'rxjs';
import { PetModel } from '../models/pet/pet.model';


@Injectable({
  providedIn: 'root'
})
export class PetServiceService{

  readonly baseURL = `${this.envUrl.petsApiUrl}/api`;


  constructor(private http: HttpClient,private envUrl: EnvironmentUrlService) { }

  public getTopFive() : Observable<Array<PetModel>> {

    const pets : Array<PetModel> = [
       {
            name : "michael",
            id:1,
            pictureUrl : "",
            age:1,
            birthDate : new Date(),
            type : "perro"
       },
       {
        name : "meli",
        id:2,
        pictureUrl : "",
        age:2,
        birthDate : new Date(),
        type : "perro"
        }

    ]



    let obs$ = of<Array<PetModel>>(pets).pipe(delay(500), map((x: Array<PetModel>) => x ));

    return obs$;

    // return this.http.get<Array<PetModel>>(`${this.baseURL}/pets/top-five`, ).pipe(map(model => {
    //   return model;
    // }));
  }


}