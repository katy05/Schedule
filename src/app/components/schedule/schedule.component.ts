import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css'],
})
export class ScheduleComponent implements OnInit {
  @Input()
  schedule: any;
  @Output()
  openForm = new EventEmitter();

  numberOfDays: number[] = [1, 2];
  numberOfGroups: string[] = [];

  constructor() {}

  ngOnInit(): void {
    this.numberOfGroups = Object.keys(this.schedule['1']);
  }

  sendOpenForm(event: any): void {
    this.openForm.emit(event);
  }
}
