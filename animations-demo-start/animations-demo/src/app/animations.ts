import { trigger, state, transition, style, animate, keyframes, animation, useAnimation } from '@angular/animations';

// tslint:disable-next-line:whitespace
export let bounceOutLeftAnimation= animation(
    animate('0.5s 1s ease-out',
                keyframes(
                    [
                        style({offset: .2, opacity: 1, transform: 'translateX(20px)'}),
                        style({offset: 1, opacity: 0, transform: 'translateX(-100%)'})
                    ])
                )
)

export let fadeInAnimation = animation(
    [style({ opacity: 0}), animate('{{duration}} {{easing}}')], 
    { params: { duration: '2s', easing: 'ease-out'}}
)

export let fade = trigger('fade', 
    [
        // state('void', style({backgroundColor: 'yellow', opacity: 0}) ),
        transition('void => *', useAnimation(fadeInAnimation)),
        // transition('* => void', [animate(2000 - Instead of 2 transitions, we can have one bi-directional
        // ,style({backgroundColor: 'yellow', opacity: 0})
        // )
        transition('* => void', // Alternativie transition(':enter, :leave') can be used
            [// , - instead of duplicating it here, this goes to State()
                animate(2000, style({ opacity: 0}))
            ]
        )
    ]
    )

    export let slide = trigger('slide', [
      // state('void', style({backgroundColor: 'yellow', opacity: 0, transform: 'translateX(-20px)'}) ),
        transition(
            'void => *', 
            [style({transform: 'translateX(-20px)'}), animate(500)]
        ),
        transition('* => void', useAnimation(bounceOutLeftAnimation))
           // [animate('0.5s cubic-bezier(.51,.36,.83,.67)'), style({transform: 'translateX(-100px)'})])
        ])
