import { Component,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component {
@Output()childTwoValue = new EventEmitter<string>;

onAddChildValue(val: string){
  this.childTwoValue.emit(val)
}
}
// output decorator: child component send data to parent component
// EventEmitter notify parent component that child component wants to send data to parent component