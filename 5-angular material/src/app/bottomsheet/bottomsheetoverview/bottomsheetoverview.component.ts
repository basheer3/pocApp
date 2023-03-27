import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef} from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-bottomsheetoverview',
  templateUrl: './bottomsheetoverview.component.html',
  styleUrls: ['./bottomsheetoverview.component.css']
})
export class BottomsheetoverviewComponent implements OnInit {

  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomsheetoverviewComponent>) { }

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
  
  ngOnInit(): void {
  }

}
