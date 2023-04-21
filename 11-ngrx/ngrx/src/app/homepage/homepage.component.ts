import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromReducer from '../customers/state/customer.reducer';
import * as CustomerActions from '../customers/state/customer.actions';
import { Customer } from '../customers/state/customer.model';

@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private store: Store<fromReducer.AppState>) { }

  ngOnInit(): void {
    console.log('homepage comp called')

    const obj: Customer[]=[{
          name: 'basheer',
          age: 12,
          gender: 'M'        
    }]
    
    // this.store.dispatch(new CustomerActions.LoadCustomerSuccess(obj));

    // this.store.dispatch(new CustomerActions.LoadCustomer());

    // this.store.dispatch({
    //   type: CustomerActions.CustomerActionTypes.LOAD_CUSTOMER_SUCCESS,
    //   payload: obj
    // });

  }

}
