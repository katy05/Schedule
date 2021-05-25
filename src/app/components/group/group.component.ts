import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {
  
  

  groupInfo: {number: String, name: String}[] = [{number: '11', name:'Прикладная информатика'},
  {number: '14', name:'ПОИТ'},
  {number: '18', name:'Прикладная математика'},
  {number: '21', name:'Прикладная информатика'},
  {number: '24', name:'ПОИТ'},
  {number: '28', name:'Прикладная математика'},
  {number: '31', name:'Прикладная информатика'},
  {number: '34', name:'ПОИТ'},
  {number: '38', name:'Прикладная математика'},
  {number: '41', name:'Прикладная информатика'},
  {number: '44', name:'ПОИТ'},
  {number: '48', name:'Прикладная математика'}
];
  constructor() { }

  ngOnInit(): void {
  }

}
