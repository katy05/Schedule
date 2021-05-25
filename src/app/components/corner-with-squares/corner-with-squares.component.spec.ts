import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CornerWithSquaresComponent } from './corner-with-squares.component';

describe('CornerWithSquaresComponent', () => {
  let component: CornerWithSquaresComponent;
  let fixture: ComponentFixture<CornerWithSquaresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CornerWithSquaresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CornerWithSquaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
