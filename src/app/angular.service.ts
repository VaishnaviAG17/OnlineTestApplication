import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AngularService {

  constructor(private http : HttpClient) { }
   
    getQuestionJson(){
      return this.http.get<any>("assets/angular.json");
    }
}
