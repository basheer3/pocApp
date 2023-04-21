import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IgxExcelModule } from 'igniteui-angular-excel';
import { IgxSpreadsheetModule } from 'igniteui-angular-spreadsheet';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IgxExcelModule,
        IgxSpreadsheetModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
