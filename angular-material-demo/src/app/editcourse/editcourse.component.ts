import { Component, OnInit, InjectionToken, Inject } from '@angular/core';
import { inject } from '@angular/core/testing';
import { MAT_DIALOG_DATA } from '@angular/material';

// export const DIALOG_DATA = new InjectionToken('DIALOG_DATA');

@Component({
  selector: 'app-editcourse',
  templateUrl: './editcourse.component.html',
  styleUrls: ['./editcourse.component.css']
})
export class EditcourseComponent implements OnInit {

  /* constructor(@Inject(DIALOG_DATA) data: any) {
    console.log('Data', data);
   } */

   constructor(@Inject(MAT_DIALOG_DATA) data: any) {
    console.log('Data', data);
   }

  ngOnInit() {
  }

}
