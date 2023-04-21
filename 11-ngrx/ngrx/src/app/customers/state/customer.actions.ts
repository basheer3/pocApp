import { Action } from "@ngrx/store";
import {Customer} from './customer.model';

export enum CustomerActionTypes{
    LOAD_CUSTOMER= "[Customer] Load Customer",
    LOAD_CUSTOMER_SUCCESS ="[Customer] Load Customer Success",
    LOAD_CUSTOMER_FAILURE ="[Customer] Load Customer Failure"
}

export class LoadCustomer implements Action{
    readonly type= CustomerActionTypes.LOAD_CUSTOMER
}

export class LoadCustomerSuccess implements Action{
    readonly type= CustomerActionTypes.LOAD_CUSTOMER_SUCCESS
    constructor(public payload:Customer[]){}
}

export class LoadCustomerFailure implements Action{
    readonly type=CustomerActionTypes.LOAD_CUSTOMER_FAILURE
    constructor(public payload:string){}
}

export type Actions = LoadCustomer | LoadCustomerSuccess | LoadCustomerFailure;