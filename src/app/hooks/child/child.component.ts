import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges {
@Input() count: number;
//detect the change input data bound property than trigger the hook
//it can detect the change of input decorator variable 
ngOnChanges(changes: SimpleChanges): void {
  for(let i in changes) {
    if(i==='count') {
      console.log("previous count", changes[i].previousValue);
      console.log("current count", changes[i].currentValue);
      console.log("first change", changes[i].firstChange);
  }
  }
}
}
