import { Component, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-encap-v2-child3',
  templateUrl: './encap-v2-child3.component.html',
  styleUrls: ['./encap-v2-child3.component.css'], 
  encapsulation:ViewEncapsulation.Emulated
})
export class ViewEncapsulationv2Child3Component {
  child3 = "ViewEncapsulation"
  btn_name="Emulate"
}
