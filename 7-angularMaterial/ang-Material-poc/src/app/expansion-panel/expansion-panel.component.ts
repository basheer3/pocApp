import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

interface PanelData {
  name: string;
  position: number;
  weight: number;
}


@Component({
  selector: 'app-expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.css']
})
export class ExpansionPanelComponent implements OnInit {
  panelData: PanelData[];
  temp: any;
  panelOpenState = false;
  displayedColumns: string[] = ['position', 'name', 'weight'];
  dataSource: MatTableDataSource<PanelData>;

  constructor() { }

  ngOnInit(): void {
    this.dataLoad();
  }

  dataLoad() {
    this.panelData = [
      { position: 0, name: 'Hydrogen', weight: 1.0079 },
      { position: 1, name: 'Helium', weight: 4.0026 },
      { position: 2, name: 'Lithium', weight: 6.941 },
      { position: 2, name: 'Lithium', weight: 6.941 },
      { position: 3, name: 'Hydrogen', weight: 1.0079 },
      { position: 4, name: 'Helium', weight: 4.0026 },
      { position: 5, name: 'Lithium', weight: 6.941 },
      { position: 6, name: 'Lithium', weight: 6.941 },
      { position: 7, name: 'Hydrogen', weight: 1.0079 },
      { position: 8, name: 'Helium', weight: 4.0026 },
      { position: 9, name: 'Lithium', weight: 6.941 },
      { position: 10, name: 'Lithium', weight: 6.941 }
    ];
  }
  
  getData(index:number) {
    this.temp = this.panelData.filter(
      data => {
        return data.position == index
      }
    )
    return this.dataSource = new MatTableDataSource(this.temp);
  }

  DeleteRecord(data) {
    console.log(data);
  }

}
