import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { EditcourseComponent } from './editcourse/editcourse.component';
import { MatComponentsModule } from './mat-components/mat-components.module';

@NgModule({
  declarations: [
    AppComponent,
    EditcourseComponent
  ],
  entryComponents: [ // Dynamically added components
    EditcourseComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatComponentsModule
  ],
  providers: [/* {  provide: DIALOG_DATA, useValue: {} }  */],
  bootstrap: [AppComponent]
})
export class AppModule { }
