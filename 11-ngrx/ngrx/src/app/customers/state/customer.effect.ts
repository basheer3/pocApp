// import { Injectable } from '@angular/core';
// import {Actions, createEffect, ofType } from '@ngrx/effects'
// import { Action } from '@ngrx/store';
// import { Observable, of } from 'rxjs';
// import { map, mergeMap, catchError } from 'rxjs';
// import * as CustomerAction from './customer.actions';
// import { CustomerService } from '../services/customer.service';
// import { Customer } from './customer.model';

// @Injectable()
// export class CustomerEffect {
//     constructor(
//         private actions$: Actions,
//         private customerService: CustomerService
//       ) {}

//   loadPhotos$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType<CustomerAction.LoadCustomer>(CustomerAction.CustomerActionTypes.LOAD_CUSTOMER),
//       mergeMap((actions:CustomerAction.LoadCustomer) => this.customerService.getCustomers().pipe(
//         map((customer:Customer[]) => {
//             const obj=[{
//                 name: 'basheer',
//                 age: 12,
//                 gender: 'M'
//             }]
//           return  new CustomerAction.LoadCustomerSuccess(obj)
//         }),
//         catchError((err) => of(new CustomerAction.LoadCustomerFailure(err)))
//       ))
//     )
//   );

  
// }