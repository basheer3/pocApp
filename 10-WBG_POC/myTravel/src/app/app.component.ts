import { Component, OnInit } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import * as moment from 'moment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'myTravel';
  myDate = moment(new Date());
  duration:any;
  startTime=moment(new Date("2023-04-06T13:00:00Z"));
  hours:any;

  ngOnInit(): void {
    this.duration = moment.duration(this.myDate.diff(this.startTime));
    this.hours = this.duration.asHours();
    console.log('hours:',this.hours)
    console.log('testing:',moment(this.startTime).fromNow())
    console.log('date1;',this.myDate)
    console.log('date2;',this.startTime)

  }
  constructor(private cdRef:ChangeDetectorRef){


  }
 

}
