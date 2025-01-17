import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppointmentsRoutingModule } from './appointments-routing.module';
import { AppointmentsCalendarComponent } from './pages/appointments-calendar/appointments-calendar.component';
import { MaterialModule } from 'src/app/core/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MonthlyCalendarComponent } from './components/monthly-calendar/monthly-calendar.component';
import { WeeklyCalendarComponent } from './components/weekly-calendar/weekly-calendar.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { AppointmentOverlayCalendarService } from './services/appointment-overlay-calendar.service';
import { A11yModule } from '@angular/cdk/a11y';
import { AddAppointmentDialogComponent } from './components/add-appointment-dialog/add-appointment-dialog.component';
import { EditAppointemntDialogComponent } from './components/edit-appointemnt-dialog/edit-appointemnt-dialog.component';
import { DetailsAppointmentDialogComponent } from './components/details-appointment-dialog/details-appointment-dialog.component';
import { IssueFormatPipe } from './pipes/issue-format.pipe';


@NgModule({
  providers:[AppointmentOverlayCalendarService],
  declarations: [
    AppointmentsCalendarComponent,
    MonthlyCalendarComponent,
    WeeklyCalendarComponent,
    AddAppointmentDialogComponent,
    EditAppointemntDialogComponent,
    DetailsAppointmentDialogComponent,
    IssueFormatPipe
  ],
  imports: [
    CommonModule,
    AppointmentsRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    OverlayModule,
    A11yModule
  ]
})
export class AppointmentsModule { }
