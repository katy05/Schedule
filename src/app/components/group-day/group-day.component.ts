import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-group-day',
  templateUrl: './group-day.component.html',
  styleUrls: ['./group-day.component.css']
})
export class GroupDayComponent implements OnInit {

  @Input()
  groupSchedule: any;
  numberOfClasses: number[] = [];
  constructor() { }

  ngOnInit(): void {
    this.numberOfClasses = Object.keys(this.groupSchedule).map(index => +index);
  }

}
