import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  title = 'schedule';

  schedule = {
    1: {
      11: {
        1: [{
          name: 'Компьютерная графика',
          teacher: 'Никитин А.И.',
          room: '306',
          type: 'лз'
        }, {
          name: 'Операционные сети',
          teacher: 'Новый В.В.',
          room: '308',
          type: 'лз'
        }],
        2: [{
          name: 'МИИ',
          teacher: 'Корчевская Е.А.',
          room: '206',
          type: 'лк'
        }]
      },
      12: {
        1: [{
          name: 'Архитект. комп.',
          teacher: 'Ермоченко С.А.',
          room: '306',
          type: 'лк'
        }]
      }
    },
    2: {
      11: {
        1: [{
          name: 'Архитект. комп.',
          teacher: 'Ермоченко С.А.',
          room: '306',
          type: 'лк'
        }],
        2: [{
          name: 'МИИ',
          teacher: 'Корчевская Е.А.',
          room: '206',
          type: 'лк'
        }]
      },
      12: {
        1: [{
          name: 'Операционные сети',
          teacher: 'Новый В.В.',
          room: '308',
          type: 'лз'
        }, {
          name: 'Компьютерная графика',
          teacher: 'Никитин А.И.',
          room: '306',
          type: 'лз'
        }
        ]
      }
    }
  }
}
