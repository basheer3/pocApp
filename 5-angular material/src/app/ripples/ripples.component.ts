import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ripples',
  templateUrl: './ripples.component.html',
  styleUrls: ['./ripples.component.css']
})
export class RipplesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  centered = false;
  disabled = false;
  unbounded = false;

  radius: number;
  color: string;
}
