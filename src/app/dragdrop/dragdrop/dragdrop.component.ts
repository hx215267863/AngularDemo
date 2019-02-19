import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dragdrop',
  templateUrl: './dragdrop.component.html',
  styleUrls: ['./dragdrop.component.scss']
})
export class DragdropComponent implements OnInit {


  items: Array<string> = ["div1", "div2", "div3", "div4", "div5", "div6"];

  constructor() { }

  ngOnInit() {
  }

  //放下后的处理
  handleMove($event, data, index) {
    console.log($event, "$event被拖的项");
    console.log(data, "data目标div");
    console.log(index, "目标index");
    var r: number = this.getArrIndexOfValue(this.items, $event.data);//被拖拽的index
    this.items.splice(index, 1, $event.data, data);
    this.items.forEach((element, i) => {
      if (element == $event.data) {       
        //插入了一个元素,数组中有两个目标元素,并且索引刚好是r
        if (i != r) {
          //往下拖下直接删除,往下拖,因为元素被挤下去一格, 所以要+1
          if (index > r) {
            this.items.splice(r, 1);
            return;
          } else {
            this.items.splice(r + 1, 1);
            return;
          }
        }
      }
    });



  }

  


  /**
  * 数组元素交换位置
  * @param {array} arr 数组
  * @param {number} index1 添加项目的位置
  * @param {number} index2 删除项目的位置
  * index1和index2分别是两个数组的索引值，即是两个要交换元素位置的索引值，如1，5就是数组中下标为1和5的两个元素交换位置
  */
  swapArray(arr, index1, index2) {
    arr[index1] = arr.splice(index2, 1, arr[index1])[0];
    return arr;
  }



  private getArrIndexOfValue(arr: Array<string>, value: string): number {

    for (let i: number = 0; i < arr.length; i++) {
      if (arr[i] == value) {

        return i;
      }
    }
  }


}
export class BrickData {

  constructor(private color: string, private classname: string) {


  }

}

