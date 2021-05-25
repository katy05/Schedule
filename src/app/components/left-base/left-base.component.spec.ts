import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftBaseComponent } from './left-base.component';

describe('LeftBaseComponent', () => {
  let component: LeftBaseComponent;
  let fixture: ComponentFixture<LeftBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
