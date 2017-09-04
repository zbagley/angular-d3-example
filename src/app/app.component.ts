import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit { 
 
  constructor() {
 
  }
 
  ngOnInit() {
    d3.select("body").style("background-color", "black");
    console.log(d3.scaleLinear());
  }
 
}
