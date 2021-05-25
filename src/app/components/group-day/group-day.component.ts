import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-group-day',
  templateUrl: './group-day.component.html',
  styleUrls: ['./group-day.component.css'],
})
export class GroupDayComponent implements OnInit {
  @Input()
  groupSchedule: any;
  @Output()
  openForm = new EventEmitter();
  numberOfClasses: number[] = [];
  constructor() {}

  ngOnInit(): void {
    this.numberOfClasses = Object.keys(this.groupSchedule).map(
      (index) => +index
    );
  }

  sendOpenForm(event: any): void {
    this.openForm.emit(event);
  }
}
