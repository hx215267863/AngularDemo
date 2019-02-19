import { Directive, HostListener, ElementRef, Renderer2, Input,Output,EventEmitter } from '@angular/core';
import { DragDropService, DragData } from '../drag-drop.service';



import  'rxjs/operators';
import   'rxjs/add/operator/take'; //视频是这个引用,但出错
import 'rxjs/Observable';
import  'rxjs/add/observable/fromPromise'; //低于angular6的引用

import { Observable, Subject,BehaviorSubject, asapScheduler, pipe, of, from, interval, merge, fromEvent, SubscriptionLike, PartialObserver,concat,combineLatest  } from 'rxjs';
import { map, filter, scan,take } from 'rxjs/operators';
import { webSocket } from 'rxjs/webSocket';
import { ajax } from 'rxjs/ajax';
import { TestScheduler } from 'rxjs/testing';



@Directive({
  selector: '[appDrop][dropTags][dragEnterClass]'
})
export class DropDirective {
@Output() dropped=new EventEmitter<DragData>();
  @Input() dragEnterClass: string;
  @Input() dropTags: string[] = [];

  private data$;

  constructor(
    private el: ElementRef,
    private rd: Renderer2,
    private service: DragDropService,
  ) {
    this.data$ = this.service.getDragData().pipe(take(1));
  }

  @HostListener('dragenter', ['$event'])
  onDragEnter(ev: Event) {
    if (this.el.nativeElement == ev.target) {
      this.data$.subscribe(dragData => {
        if (this.dropTags.indexOf(dragData.tag) > -1) {
          this.rd.addClass(this.el.nativeElement, this.dragEnterClass);//给拖拽的元素加一个class
        }
      });
    }
  }
  @HostListener('dragover', ['$event'])
  onDragOver(ev: Event) {
    ev.preventDefault();//防止事件冒泡
    ev.stopPropagation();
    if (this.el.nativeElement == ev.target) {
      this.data$.subscribe(dragData => {
        if (this.dropTags.indexOf(dragData.tag) > -1) {
          this.rd.setProperty(ev, 'dataTransfer.effectAllowed', 'all');
          this.rd.setProperty(ev, 'dataTransfer.dropEffect', 'move');
        } else {
          this.rd.setProperty(ev, 'dataTransfer.effectAllowed', 'none');
          this.rd.setProperty(ev, 'dataTransfer.dropEffect', 'none');
        }
      }
      );
    }
  }
  @HostListener('dragleave', ['$event'])
  onDragLeave(ev: Event) {
    if (this.el.nativeElement == ev.target) {
      this.data$.subscribe(dragData => {
        if (this.dropTags.indexOf(dragData.tag) > -1) {
          this.rd.removeClass(this.el.nativeElement, this.dragEnterClass);
        }
      });
    }
  }
  @HostListener('drop', ['$event'])
  onDrop(ev: Event) {
    if (this.el.nativeElement == ev.target) {
      this.data$.subscribe(dragData => {
        if (this.dropTags.indexOf(dragData.tag) > -1) {
          this.rd.removeClass(this.el.nativeElement, this.dragEnterClass);
          this.dropped.emit(dragData);
          this.service.clearDragData();
        }
      });

    }
  }
}
