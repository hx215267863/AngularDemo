import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragdropComponent } from './dragdrop.component';
import { DragDropRoutingModule } from './dragdrop-routing.module';

@NgModule({
  declarations: [DragdropComponent],
  imports: [
    CommonModule,
    DragDropRoutingModule
  ],
  exports:[
    DragdropComponent,
    DragDropRoutingModule
  ],
  providers:[]
})
export class DragdropModule { }
