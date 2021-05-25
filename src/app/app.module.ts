import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DayComponent } from './components/day/day.component';
import { TimeComponent } from './components/time/time.component';
import { LeftBaseComponent } from './components/left-base/left-base.component';
import { CourseComponent } from './components/course/course.component';
import { CornerWithSquaresComponent } from './components/corner-with-squares/corner-with-squares.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { ClassComponent } from './components/class/class.component';
import { GroupDayComponent } from './components/group-day/group-day.component';
import { GroupComponent } from './components/group/group.component';
import { SubgroupComponent } from './components/subgroup/subgroup.component';
import { EditFormComponent } from './components/edit-form/edit-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DayComponent,
    TimeComponent,
    LeftBaseComponent,
    CourseComponent,
    CornerWithSquaresComponent,
    ScheduleComponent,
    ClassComponent,
    GroupDayComponent,
    GroupComponent,
    SubgroupComponent,
    EditFormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
