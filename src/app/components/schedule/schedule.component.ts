import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css'],
})
export class ScheduleComponent implements OnInit {
  @Input()
  schedule: any;
  numberOfDays: number[] = [1, 2];
  numberOfGroups: string[] = [];

  constructor() {}

  ngOnInit(): void {
    this.numberOfGroups = Object.keys(this.schedule['1']);
  }
}
