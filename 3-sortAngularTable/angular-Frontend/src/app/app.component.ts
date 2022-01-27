import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-Frontend';

  toggleFlag=false;
  
  toggleSideNav1(){
    this.toggleFlag=false;
  }

  toggleSideNav2(){
    this.toggleFlag=true;
  }
}
