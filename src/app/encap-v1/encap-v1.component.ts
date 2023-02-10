import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './encap-v1.component.html',
  styleUrls: ['./encap-v1.component.css']
})
export class ViewEncapsulationV1Component {
  title = 'view-enc-v1';
}

// ViewEncapsulation is a css style encapsulation policy that makes a component more independent. 
// hide the structure, style and behavior from other parts of the code.