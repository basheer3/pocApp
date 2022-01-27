import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of,from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http:HttpClient) { }

  getUser(){
    return this.http.get('http://localhost:1000/deduction_date')
  }
}
