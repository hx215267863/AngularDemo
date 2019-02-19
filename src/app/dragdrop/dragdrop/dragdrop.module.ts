import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragdropComponent } from './dragdrop.component';
import { DragDropRoutingModule } from './dragdrop-routing.module';
import { DropDirective } from '../../directive/dragdrop/drop.directive';
import { DragDirective } from 'src/app/directive/dragdrop/drag.directive';
import { ServicesModuleModule } from 'src/app/service/services-module.module';
import { DirectiveModule } from 'src/app/directive/dragdrop/directive.module';

@NgModule({
  declarations: [
    DragdropComponent,
  ],
  imports: [
    CommonModule,
    DragDropRoutingModule,
    ServicesModuleModule,
    DirectiveModule
  ],
  exports: [
    DragdropComponent,
    DragDropRoutingModule,
  ],
  providers: [

  ]
})
export class DragdropModule { }
