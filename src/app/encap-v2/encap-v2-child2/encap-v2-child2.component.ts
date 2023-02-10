import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-encap-v2-child2',
  templateUrl: './encap-v2-child2.component.html',
  styleUrls: ['./encap-v2-child2.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ViewEncapsulationV2Child2Component {
  child2 = "ViewEncapsulation.None"

}
