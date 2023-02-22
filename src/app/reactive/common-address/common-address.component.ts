import { Component, Input } from '@angular/core';
import { FormGroup} from '@angular/forms';

@Component({
  selector: 'app-common-address',
  templateUrl: './common-address.component.html',
  styleUrls: ['./common-address.component.css']
})
export class CommonAddressComponent {
  @Input() group: FormGroup; 
  @Input() addressType: 'Primary' | 'Secondary';
}
