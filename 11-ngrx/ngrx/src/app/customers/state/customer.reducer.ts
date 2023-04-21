import * as CustomerActions from './customer.actions';
import * as fromRoot from '../../state/app-state';
import { Customer } from './customer.model';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface CustomerState{
    customers:Customer[],
    loading:boolean,
    loaded:boolean,
    error:string
}

export interface AppState extends fromRoot.AppState{
    customers:CustomerState
}

const initialState:CustomerState={
    customers:[],
    loading: false,
    loaded:false,
    error:''
}

export function customerReducer(state=initialState,action: CustomerActions.Actions):CustomerState{
    switch(action.type){
    case CustomerActions.CustomerActionTypes.LOAD_CUSTOMER: {
        return {
            ...state, 
            loading:true
        }
    }
    case CustomerActions.CustomerActionTypes.LOAD_CUSTOMER_SUCCESS:{        
        return {
            ...state,
            loading:false,
            loaded:true,
            customers:action.payload
        }
    }
    case CustomerActions.CustomerActionTypes.LOAD_CUSTOMER_FAILURE:{
        return {
            ...state,
            customers:[],
            loading:false,
            loaded:false,
            error:action.payload            
        }
    }
    default:{
        return state
    }
    }
}

const getCustomerFeatureState = createFeatureSelector<CustomerState>("customers")

export const getCustomers= createSelector(getCustomerFeatureState,
    (state:CustomerState)=> state.customers
    )
export const getCustomersLoading= createSelector(getCustomerFeatureState,
    (state:CustomerState)=> state.loading
    )
export const getCustomersError= createSelector(getCustomerFeatureState,
    (state:CustomerState)=> state.error
    )