import { Component, ViewChild } from '@angular/core';
import { EditFormComponent } from './components/edit-form/edit-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'schedule';
  showEditClassForm = false;
  editableClass: any;
  schedule = {
    1: {
      11: {
        1: [
          {
            name: 'Компьютерная графика',
            teacher: 'Никитин А.И.',
            room: '306',
            type: 'лз',
          },
          {
            name: 'Операционные сети',
            teacher: 'Новый В.В.',
            room: '308',
            type: 'лз',
          },
        ],
        2: [
          {
            name: 'МИИ',
            teacher: 'Корчевская Е.А.',
            room: '206',
            type: 'лк',
          },
        ],
      },
      12: {
        1: [
          {
            name: 'Архитект. комп.',
            teacher: 'Ермоченко С.А.',
            room: '306',
            type: 'лк',
          },
        ],
      },
    },
    2: {
      11: {
        1: [
          {
            name: 'Архитект. комп.',
            teacher: 'Ермоченко С.А.',
            room: '306',
            type: 'лк',
          },
        ],
        2: [
          {
            name: 'МИИ',
            teacher: 'Корчевская Е.А.',
            room: '206',
            type: 'лк',
          },
        ],
      },
      12: {
        1: [
          {
            name: 'Операционные сети',
            teacher: 'Новый В.В.',
            room: '308',
            type: 'лз',
          },
          {
            name: 'Компьютерная графика',
            teacher: 'Никитин А.И.',
            room: '306',
            type: 'лз',
          },
        ],
      },
    },
  };

  @ViewChild('editForm')
  editForm!: EditFormComponent;

  ngOnInit(): void {
    const days = 6;
    const groups = 12;

    for (let i = 0; i < 6; i++) {}
  }

  openForm(event: any): void {
    console.log('event', event);
    this.editableClass = event;
    this.showEditClassForm = true;
    this.editForm.patchFormValues(event);
  }
}
