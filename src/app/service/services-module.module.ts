import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropService } from './dragdrop/drag-drop-service.service';

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule
  ],
  exports:[
    // DragDropService
  ],
  providers:[
    DragDropService
  ]
})
export class ServicesModuleModule { }
