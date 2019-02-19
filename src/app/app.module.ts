import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Animations01Component } from './animations01/animations01.component';
import { Animations02Component } from './animations02/animations02.component';

import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import { Animations03Component } from './animations03/animations03.component';
import { DragdropModule } from './dragdrop/dragdrop/dragdrop.module';
import { DragDirective } from './directive/dragdrop/drag.directive';
import { DropDirective } from './directive/dragdrop/drop.directive';
import { DirectiveModule } from './directive/dragdrop/directive.module';

@NgModule({
  declarations: [ //指令,组件
    AppComponent,
    Animations01Component,
    Animations02Component,
    Animations03Component,
    // DragDirective,
    // DropDirective
  ],
  imports: [ //模块
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NoopAnimationsModule  ,
    DragdropModule  ,
    DirectiveModule
  ],
  providers: [],//服务
  bootstrap: [AppComponent]//主组件
})
export class AppModule { }
