import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  
  url = "http://192.168.0.7/api/";
  constructor(private http: HttpClient) { }

  private setHeaders(): HttpHeaders {
    const headersConfig = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    };
    return new HttpHeaders(headersConfig);
}


  register(value){
    console.log(value);
    return this.http.post(this.url+'register',value);


  }


}
