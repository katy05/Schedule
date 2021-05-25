import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-base',
  templateUrl: './left-base.component.html',
  styleUrls: ['./left-base.component.css']
})
export class LeftBaseComponent implements OnInit {

  constructor() { }
  numberOfDays: number[] = [1, 2, 3, 4, 5, 6];

  ngOnInit(): void {
  }

}
