import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component  {
@Input()parentItem ='Child Value';

}
// decorator: contains meta information about class property and method
// input decorator update the data of child component, child component receives property value from parent component