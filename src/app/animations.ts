import {
  trigger,
  transition,
  style,
  query,
  group,
  animateChild,
  animate,
  keyframes
} from '@angular/animations'
import { setClassMetadata } from '@angular/core/src/r3_symbols'

export const fader = trigger('routeAnimations', [
  transition('* <=> *', [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        left: 0,
        width: '100%',
        opacity: 0,
        transform: 'scale(0) translateY(100%)'
      })
    ]),
    query(':enter', [
      animate(
        '600ms ease',
        style({ opacity: 1, transform: 'scale(1) translateY(0)' })
      )
    ])
  ])
])

export const slider = trigger('routeAnimations', [
  transition('* => goLeft', slideTo('left')),
  transition('* => goRight', slideTo('right')),
  transition('goRight => *', slideTo('left')),
  transition('goLeft => *', slideTo('right'))
])

function slideTo (direction) {
  const optional = { optional: true }
  return [
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          /* top: 0, */
          [direction]: 0,
          width: '100%'
          /* maxWidth: '1200px',
          marginLeft: 'auto',
          marginRight: 'auto' */
        })
      ],
      optional
    ),
    query(':enter', [
      style({
        [direction]: '-100%'
      })
    ]),
    group([
      query(
        ':leave',
        [
          animate(
            '600ms ease',
            style({
              [direction]: '100%'
            })
          )
        ],
        optional
      ),
      query(':enter', [animate('600ms ease', style({ [direction]: '0%' }))])
    ])
  ]
}
