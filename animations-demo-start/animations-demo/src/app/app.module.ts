import { ZippyComponent } from './zippy/zippy.component';
import { TodosComponent } from './todos/todos.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SlideComponent } from './slide/slide.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    ZippyComponent,
    SlideComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
