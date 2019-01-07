import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isParagraphVisible:boolean=true;
  buttonClicks = new Array();

  onButtonClick()
  {
    if(this.isParagraphVisible)
      this.isParagraphVisible=false;
    else
      this.isParagraphVisible=true;

    this.buttonClicks.push(Date.now());

    console.log(this.buttonClicks);
  }
}

