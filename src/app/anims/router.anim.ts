import { trigger, state, transition, style, animate, keyframes,query,group } from '@angular/animations';

// import { AnimationEntryMetadata } from '@angular/core';

export const routerAnim = trigger('routeAnim', [
    state('void', style({ position: 'fixed', 'width': '100%','height':'80%' })),
    state('*', style({ position: 'fixed', 'width': '100%','height':'80%' })),

    transition('void=>*', [
        style({ transform: 'translate3d(-100%,0,0)' }),
        animate('.5s ease-in-out', style({ transform: 'translate3d(0,0,0)' }))
        // style({transform:'translateX(-100%)'}),
        // animate('.5s ease-in-out',style({transform:'translateX(0)'}))
    ]),
    transition('void=>*', [
        style({ transform: 'translate3d(0,0,0)' }),
        animate('.5s ease-in-out', style({ transform: 'translate3d(100%,0,0)' }))
        // style({transform:'translateX(0)'}),
        // animate('.5s ease-in-out',style({transform:'translateX(100%)'}))
    ]),
]);

export const slideToRight = trigger('routerAnimate', [
    // 定义void表示空状态下
    state('void', style({ position: 'fixed', 'width': '100%', 'height': '100%' })),
    // * 表示任何状态
    state('*', style({ position: 'fixed', 'width': '100%', 'height': '100%' })),
    // 进场动画
    transition(':enter', [
        style({ transform: 'translate3d(-100%,0,0)' }),
        animate('.5s ease-in-out', style({ transform: 'translate3d(0,0,0)' }))
    ]),
    // 出场动画
    transition(':leave', [
        style({ transform: 'translate3d(0,0,0)' }),
        animate('.5s ease-in-out', style({ transform: 'translate3d(100%,0,0)' }))
    ])
]);

// export const routeAnimation: AnimationEntryMetadata =
//   trigger('routeAnimation', [
//     transition(':enter', [
//       style({
//         position: 'absolute'
//       }),
//       animate('0.5s ease-in-out')
//     ]),
//     transition('* => *', [
//       query(':leave', style({ transform: 'translateX(0)', position: 'absolute'}), { optional: true }),
//       query(':enter', style({ transform: 'translateX(100%)', position: 'absolute'}), { optional: true }),

//       group([
//         query(':leave', animate('.5s ease-in-out', style({transform: 'translateX(-100%)'})), { optional: true }),
//         query(':enter', animate('.5s ease-in-out', style({transform: 'translateX(0)'})), { optional: true })
//       ])
//     ])
//   ]);


