import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as CustomerActions from '../state/customer.actions';
import { Customer } from '../state/customer.model';
import * as fromReducer from '../state/customer.reducer';

@Component({
  selector: 'customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customers$!: Observable<Customer[]>;

  constructor(private store:Store<fromReducer.AppState>) { }

  ngOnInit(): void {
    const obj: Customer[]=[{
      name: 'basheer',
      age: 12,
      gender: 'M'        
}]

    this.store.dispatch({
      type: CustomerActions.CustomerActionTypes.LOAD_CUSTOMER_SUCCESS,
      payload: obj
    });
    // this.store.dispatch(new CustomerActions.LoadCustomer());
    // this.customers$=this.store.pipe(select(fromReducer.getCustomers))

    // this.customers$.subscribe(data=>console.log('data:',data))
  
  }

}
