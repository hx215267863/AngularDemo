import { Directive, HostListener, ElementRef, Renderer2, Input } from '@angular/core';
import { DragDropService } from 'src/app/service/dragdrop/drag-drop-service.service';


@Directive({
  selector: '[appDrag][dragTag][dragData][draggedClass]'
})
export class DragDirective {

  //是否可拖拽
  _isDraggable: boolean = false;
  
  //输入参数
  @Input() draggedClass: string;
  @Input() dragTag:string;
  @Input() dragData:any;

  //属性方法 相当于元素上写有appDrag=true时,true会赋值给val
  @Input('appDrag')
  set isDraggable(val:boolean) {
    this._isDraggable = val;
    this.rd.setAttribute(this.el.nativeElement,'draggable',val.toString()); 
   
  }
  get isDragable() {
    return this._isDraggable;
  }

  constructor(
    private el: ElementRef,
    private rd: Renderer2,
    private service:DragDropService,
  ) {

  }

  @HostListener('dragstart', ['$event'])
  onDragStart(ev: Event) {
    if (this.el.nativeElement == ev.target) {
      this.rd.addClass(this.el.nativeElement, this.draggedClass);//给拖拽的元素加一个class
     this.service.setDragData({tag:this.dragTag,data:this.dragData});
    }
  }
  @HostListener('dragend', ['$event'])
  onDragEnd(ev: Event) {
    if (this.el.nativeElement == ev.target) {
      this.rd.removeClass(this.el.nativeElement, this.draggedClass);//给拖拽的元素加一个class
    }
  }





}
