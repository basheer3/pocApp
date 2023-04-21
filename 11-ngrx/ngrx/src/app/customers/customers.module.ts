import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { CustomerComponent } from './customer/customer.component';
import { Routes } from '@angular/router';
import { customerReducer } from './state/customer.reducer';
import {EffectsModule, Actions} from '@ngrx/effects';
// import { CustomerEffect } from './state/customer.effect';


const customerRoutes: Routes = [
  {
    path: "", component:CustomerComponent
  }
];

@NgModule({
  declarations: [
    CustomerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(customerRoutes),
    StoreModule.forFeature("customers",customerReducer),
    // EffectsModule.forFeature([CustomerEffect])
  ]
})
export class CustommersModule { }
