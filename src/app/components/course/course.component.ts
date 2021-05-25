import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  numberOfCourse :String[] = ['1 курс', '2 курс', '3 курс', '4 курс']
  constructor() { }

  ngOnInit(): void {
  }

}
