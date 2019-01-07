import { NgModule } from '@angular/core';
import {
  MatDialogModule, MatButtonModule,
  MatCheckboxModule, MatRadioModule,
  MatSelectModule, MatInputModule,
  MatDatepickerModule, MatNativeDateModule,
  MatIconModule, MatChipsModule,
  MatProgressSpinnerModule, MatTooltipModule,
  MatTabsModule } from '@angular/material';

@NgModule({
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatTabsModule,
    MatDialogModule
  ]
})
export class MatComponentsModule { }
