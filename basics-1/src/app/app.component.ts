import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username:string = "";
  // isButtonDisabled =true;

  // onUpdateUserName()
  // {
  //     this.isButtonDisabled =false;
  // }
  // onButtonClick()
  // {
  //   this.username = "";
  //   this.isButtonDisabled =true;
  // }
}
