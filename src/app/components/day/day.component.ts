import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']

})
export class DayComponent implements OnInit {

  
  nameOfDays:string[] = ['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'];
  constructor() { }

  ngOnInit(): void {
  }

}
