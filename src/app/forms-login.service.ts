import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {FormsModule} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class FormsLoginService {


  private forms: FormsModule;

  constructor(private httpClient : HttpClient ) { }

  public login( forms ) :   Observable<any> {
    let httpOptions = {
      headers :  new HttpHeaders ({'Content-Type':'application/json'})};

    return this.httpClient.post<any> ("/api/users/login",{"login":forms.login,"password":forms.password},httpOptions);
  }
}
