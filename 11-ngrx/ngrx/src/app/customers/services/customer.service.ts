import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Customer } from '../state/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }
  
  getCustomers():Observable<Customer[]>{
    const url='http://localhost:3000/customers';
    return this.http.get<Customer[]>(url)
  }
}
