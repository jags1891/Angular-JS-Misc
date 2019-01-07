import { Component } from '@angular/core';
import { slide, bounceOutLeftAnimation, fadeInAnimation } from '../animations';
import { transition, style, animate, useAnimation , trigger, query, animateChild, group, stagger} from '@angular/animations';

@Component({
  selector: 'slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css'],
  animations: [
  trigger('todosAnimation', 
    [transition(':enter', [
      group([ // if you dont group animations will run sequentially
        query('h1', [style({transform: 'translateY(-20px)'}),
        animate(1000)]),
        //query('@todoAnimation', animateChild()) // (without stagger)
        query('@todoAnimation', stagger(500, animateChild()))
      ])
    ])
  ]),
  trigger('todoAnimation', [
      transition(
        ':enter', 
        useAnimation(fadeInAnimation,
          {
            params:
            {
              duration: '1000ms'
            }
        })
        //[style({transform: 'translateX(-20px)'}), animate(500)]
    ),
    transition('* => void', [style({backgroundColor: 'red'}), 
    animate(1000),
     useAnimation(bounceOutLeftAnimation)]) // using to specific animation
    ])
  ]
})
export class SlideComponent  {

  items: any[] = [
    'Wash the dishes', 
    'Call the accountant', 
    'Apply for a car insurance'];

  constructor() { }

  
  addItem(input: HTMLInputElement) {
    this.items.splice(0, 0, input.value);
    input.value = ''; 
  }

  removeItem(item) {
    const index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }

  animationStart($event){
    console.log($event);
  }
  animationDone($event){
    console.log($event);
  }
}
