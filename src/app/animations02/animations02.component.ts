import { Component, OnInit,HostBinding,HostListener } from '@angular/core';
import { trigger, state, transition, style, animate,keyframes } from '@angular/animations';
import{ divAnim} from '../anims/div.anim' //trigger剥离

@Component({
  selector: 'app-animations02',
  templateUrl: './animations02.component.html',
  styleUrls: ['./animations02.component.scss'],
  animations:[
    divAnim
  ],
})
export class Animations02Component implements OnInit {

 divState:string='out';

// @HostListener('mouseenter') //有其他重载,可以有参数
// @HostBinding()

onMouseEnter(){
  console.log('onMouseEnter');
  
  this.divState='hover';
}

onMouseLeave(){
  console.log('onMouseLeave');

  this.divState='out';
}
  constructor() { }

  ngOnInit() {
  }

}
