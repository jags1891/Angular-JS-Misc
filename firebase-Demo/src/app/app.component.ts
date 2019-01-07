import { Component } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  step1= 'import {AngularFireModule} from "angularfire2";  import {AngularFireDatabaseModule} from "angularfire2/database";';

  courses$: Observable<any[]>;
  course$;
  author$;
  courselist: AngularFireList<any>;

  constructor(private db: AngularFireDatabase)
  // tslint:disable-next-line:one-line
  {
    this.courses$ = db.list('/courses').snapshotChanges();
    this.course$ = db.object('/courses/1').valueChanges();
    this.author$ = db.object('/Author').valueChanges();
    this.courselist = db.list('/courses');
  }

  // tslint:disable-next-line:one-line
  addCourse(course: HTMLInputElement){
    this.courselist.push(course.value);
    course.value = '';

  }
// tslint:disable-next-line:one-line
updateCourse(course){

 this.db.object('/courses/' + course.key).set( course.payload.val() + ' Updated');
 //update({ course.payload.val() + ' Updated'});
}


}
