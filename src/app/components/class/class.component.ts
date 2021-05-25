import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {

  @Input()
  classInfo: any[] = [];
  groupName!: String;

  @Output()
  openForm = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  addSubclass(): void {
    this.classInfo.push({ name: '   ', teacher: '   ', room: '   ', type: '   ' });
  }
  removeSubclass(index: any) {
    this.classInfo.splice(index, 1);
  }

  editClass(groupInfo: any) {
    this.openForm.emit(groupInfo);
  }
}
