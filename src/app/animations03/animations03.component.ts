
import { Component, OnInit,HostBinding,HostListener, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { animate, state } from '@angular/animations';
import { routerAnim } from '../anims/router.anim';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-animations03',
  templateUrl: './animations03.component.html',
  styleUrls: ['./animations03.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
 
})
export class Animations03Component implements OnInit {

  

  constructor(private router:Router,private dc:ChangeDetectorRef) {
    this.dc.markForCheck();//手动检查
   }

  ngOnInit() {
  }

}
