import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css'],
})
export class EditFormComponent implements OnInit {
  @Input()
  formValue: any;
  formGroup!: FormGroup;

  lessons: String[] = [
    'Алгебра',
    'Алгебра и теория чисел',
    'Вычислительная I',
    'Вычислительная II',
    'МИИ',
  ];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      name: '',
    });

    this.patchFormValues(this.formValue);
  }

  onFormSubmit(): void {
    console.log(this.formGroup.value);
    this.formValue.name = this.formGroup.value.name;
  }

  patchFormValues(value: any) {
    this.formGroup.patchValue(value);
  }
}
