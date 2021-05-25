import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupDayComponent } from './group-day.component';

describe('GroupDayComponent', () => {
  let component: GroupDayComponent;
  let fixture: ComponentFixture<GroupDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupDayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
