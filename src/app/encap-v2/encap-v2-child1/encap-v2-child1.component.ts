import { Component, ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'app-encap-v2-child1',
  templateUrl: './encap-v2-child1.component.html',
  styleUrls: ['./encap-v2-child1.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ViewEncapsulationv2Child1Component {
  child1 = "ViewEncapsulation.ShadowDom";
  isDisable= false

  onDisableButton(){
    setTimeout(() => {
      this.isDisable= true;
    }, 100);
  }
  num: number= 10;
}
