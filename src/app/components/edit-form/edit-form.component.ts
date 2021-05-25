import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {

  lessons:String[] = ['Алгебра', 'Алгебра и теория чисел', 'Вычислительная I', 'Вычислительная II'];
  
  constructor() { }

  ngOnInit(): void {
  }

}
