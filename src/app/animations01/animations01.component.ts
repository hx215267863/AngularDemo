import { Component, OnInit } from '@angular/core';
import { trigger, state, transition, style, animate,keyframes } from '@angular/animations';

@Component({
  selector: 'app-animations01',
  templateUrl: './animations01.component.html',
  styleUrls: ['./animations01.component.scss'],
  animations:[
    //普通动画
    trigger('square01',[
      state('green',style({'background-color':'green','height':'100px','transform':'transformX(0)'})),
      state('red',style({'background-color':'red','height':'50px','transform':'transformX(100%)'})),
      transition('green=>red',animate('.1s 1s')),
      transition('red=>green',animate(1000)),
    ]),
    //缓动动画
    trigger('square02',[
      state('green',style({'background-color':'green','height':'100px','transform':'translateY(-100%)'})),
      state('red',style({'background-color':'red','height':'100px','transform':'translateY(100%)'})),
      transition('green=>red',animate('1s ease-in')),//ease-in 从慢->快
      transition('red=>green',animate('.8s ease-out')),//ease-out 从快->慢
    ]),
     //关键帧动画
     trigger('square03',[
      state('green',style({'background-color':'green','height':'100px','transform':'translateY(-100%)'})),
      state('red',style({'background-color':'red','height':'100px','transform':'translateY(100%)'})),
      transition('green=>red',animate('1s ease-in')),
      transition('red=>green',animate(5000,keyframes([
        style({transform:'translateY(100%)'}),
        style({transform:'translateY(90%)'}),
        style({transform:'translateY(80%)'}),
        style({transform:'translateY(70%)'}),
        style({transform:'translateY(60%)'}),
        style({transform:'translateY(40%)'}),
        style({transform:'translateY(50%)'}),
        style({transform:'translateY(0)'}),
        style({transform:'translateY(-10%)'}),
        style({transform:'translateY(-20%)'}),
        style({transform:'translateY(-50%)'}),
        style({transform:'translateY(-100%)'}),
        style({transform:'translateY(10%)'}),
        style({transform:'translateY(50%)'}),
        style({transform:'translateY(80%)'}),
        style({transform:'translateY(100%)'}),
        style({transform:'translateY(1000%)'}),
      ]))),
    ]),

  ]
})
export class Animations01Component implements OnInit {

  squareState01:string;
  squareState02:string;
  squareState03:string;

  constructor() { }

  ngOnInit() {
  }

  onClick01(){
    this.squareState01=this.squareState01=='red'?'green':'red';
  }
  onClick02(){
    this.squareState02=this.squareState02=='red'?'green':'red';
  }
  onClick03(){
    this.squareState03=this.squareState03=='red'?'green':'red';
  }
}
