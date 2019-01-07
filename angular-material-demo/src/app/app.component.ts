import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import { MatDialog } from '@angular/material';
import { EditcourseComponent } from './editcourse/editcourse.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular material demo';
  isChecked= true;
  isFemaleChecked= true;
  minDate= new Date(2017, 1, 1);
  maxDate= new Date();

  colors= [
    {id: 1, value: 'blue'},
    {id: 2, value: 'white'},
    {id: 3, value: 'pink'},
    {id: 4, value: 'green'},
  ];

  categories= [
    {value: 'Beginner' },
    {value: 'Intermediate'},
    {value: 'Advanced' }
  ];

  color= 2;
  progress= 0;
  timer;

  isLoading= false;

  // tslint:disable-next-line:one-line
  constructor(private dialog: MatDialog){
    this.timer = setInterval(() => {
      this.progress++;
      // tslint:disable-next-line:curly 
      if (this.progress === 100)
      // tslint:disable-next-line:one-line
      {
        this.isLoading = true;
        this.dummyGetCousesService()
        .subscribe(x => {
          this.isLoading = false;
          clearInterval(this.timer);
        });
      }

    }, 200);


  }
  // tslint:disable-next-line:one-line
  onCheckChanged($event){
    console.log(event);
  }

  // tslint:disable-next-line:one-line
  dummyGetCousesService(){

    return Observable.timer(2000);
  }

  // tslint:disable-next-line:one-line
  selectCat(category){
    console.log(category);
    this.categories
    .filter(c => c !== category)
    .forEach(c => c['selected'] = false);

    category.selected = !category.selected;

  }

  // tslint:disable-next-line:one-line
  openDialog(){
    this.dialog.open(EditcourseComponent, {data: { courseid: 1 }} )
    .afterClosed()
    .subscribe(result => {
      console.log(result);
    });
  }
}
