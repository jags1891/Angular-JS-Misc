import { Component } from '@angular/core';
import { NgRedux, select } from 'ng2-redux';
import { IAppState } from './store';
import { INCREMENT } from './actions';
import { Map } from 'immutable' ;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  // @select('counter') count; // by using select decorator, we can get a slice of state as an observable
  // @select(['messages', 'newMessages']) newMessages; //messaging.newMessages
  @select((s) =>{ return s.get('counter'); }) count;
  @select((s: IAppState) => {return s.messages.newMessages; }) newMessages;

  // tslint:disable-next-line:one-line
  constructor(private ngRedux: NgRedux< Map<string, any> >){

   /*  ngRedux.subscribe(() => {
      console.log(ngRedux.getState());
    }); */
  }

  increment(){
    this.ngRedux.dispatch({type: INCREMENT});
   // this.counter++;
  }


}
