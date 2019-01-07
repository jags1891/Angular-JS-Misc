import { trigger, state, style, transition, animate } from '@angular/animations';

 export let expandCollapseAAnimationTrigger = trigger('expandCollapse', [
    // tslint:disable-next-line:max-line-length
    state('collapsed', style({height: 0, paddingTop: 0, paddingBottom: 0, overflow: 'hidden', opacity: 0})), // using custom statge because there is no void and default states
   // state('expanded', style({height: '*', padding: '*', overflow: 'auto'})), // height: '*' angular will dynamically evaluate height at the runtime,
    transition('collapsed=>expanded', [
      animate('3000ms ease-out', style({height: '*', padding: '*', overflow: 'auto'})), 
      animate('1s',  style({opacity: 1})) // multi step animation zippy expands and text fades in
    ]),
    transition('expanded=>collapsed', [animate('3000ms ease-in')])
  ])
