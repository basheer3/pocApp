import { Component, OnInit } from '@angular/core';
interface Igraph{
  name:string,
  value:number
};

@Component({
  selector: 'defect-summary',
  templateUrl: './defect-summary.component.html',
  styleUrls: ['./defect-summary.component.scss']
})

export class DefectSummaryComponent implements OnInit {
  single: Igraph[]=[
    {
      "name": "High",
      "value": 30
    },
    {
      "name": "Critical",
      "value": 20
    },
    {
      "name": "Medium",
      "value": 15
    },
    {
      "name": "Low",
      "value": 20
    }
  ];

  view:[number,number] = [320, 200];

  // options
  showXAxis = true;
  showYAxis = true;

  colorScheme :any= {
    domain: ['#aeacac', '#d9d9d9', '#d9d9d9', '#aeacac']
  };

  constructor() { 
    // Object.assign(this, { single })
  }

  ngOnInit(): void {
  }

  onSelect(event:Event) {
    console.log(event);
  }

}
