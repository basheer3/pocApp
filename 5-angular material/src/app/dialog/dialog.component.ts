import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentSheet);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}

@Component({
  selector: 'dialog-content-sheet',
  template:
  `
  <h2 mat-dialog-title>Install Angular</h2>
<mat-dialog-content class="mat-typography">
  <h3>Develop across all platforms</h3>
  <p>Learn one way to build applications with Angular and reuse your code and abilities to build
    apps for any deployment target. For web, mobile web, native mobile and native desktop.</p>

  <h3>Speed &amp; Performance</h3>
  <p>Achieve the maximum speed possible on the Web Platform today, and take it further, via Web
    Workers and server-side rendering. Angular puts you in control over scalability. Meet huge
    data requirements by building data models on RxJS, Immutable.js or another push-model.</p>

  <h3>Incredible tooling</h3>
  <p>Build features quickly with simple, declarative templates. Extend the template language with
    your own components and use a wide array of existing components. Get immediate Angular-specific
    help and feedback with nearly every IDE and editor. All this comes together so you can focus
    on building amazing apps rather than trying to make the code work.</p>
    </mat-dialog-content>
<mat-dialog-actions align="end">
  <button mat-button mat-dialog-close>Cancel</button>
  <button mat-button [mat-dialog-close]="true" cdkFocusInitial>Install</button>
</mat-dialog-actions>
  `,
})
export class DialogContentSheet {}
