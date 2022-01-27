import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';


export interface PeriodicElement {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}[]



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {


  // @ViewChild(MatPaginator)
  // paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  users!: User[];
  ELEMENT_DATA :PeriodicElement[] = [];
  constructor(private userService: UserService) {

  }

  dataSource = new MatTableDataSource<PeriodicElement>();
  displayedColumns = ['id', 'firstName', 'lastName', 'email'];
  // @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;


  ngOnInit(): void {
    this.userService.getUsers().subscribe((data: User[]) =>{
      // console.log(data);
      this.users = data;
      this.ELEMENT_DATA=this.users;
      this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
      this.dataSource.sort=this.sort;
      console.log('element data=',this.ELEMENT_DATA);

    });


  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }



}
