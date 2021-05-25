import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subgroup',
  templateUrl: './subgroup.component.html',
  styleUrls: ['./subgroup.component.css']
})
export class SubgroupComponent implements OnInit {

  constructor() { }
  subgroup : String[] = ['11_1', '11_2', '14_1', '18_1', '21_1', '24_1', '28_1', '31_1', '34_1', '38_1', '41_1', '44_1', '48_1'];
  ngOnInit(): void {
  }

}
