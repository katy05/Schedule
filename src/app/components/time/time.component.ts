import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {

  constructor() { }

  time:string[] = ['8:00 - 9:25', '9:35 - 11:00', '11:30 - 12:55', '13:05 - 14:30', '14:40 - 16:05', '16:35 - 18:00']

  ngOnInit(): void {
  }

}
