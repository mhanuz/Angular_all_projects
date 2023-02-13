import { Component, OnInit  } from '@angular/core';
import { Validators, FormArray,FormGroup, FormControl} from '@angular/forms';
import { NameValidator } from './name-validator.directive';
import { PhoneNumberValidation} from './phone-number-validator.directive'
import { CustomerInfo, BasicInfo, PrimaryAddress, SecondaryAddress } from './customer-info-typeform';


@Component({
  selector: 'app-root',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})

export class ReactiveFormComponent implements OnInit{

  signupForm: FormGroup<CustomerInfo>;
  primaryAddressCheckBoxValue: boolean;
  secondaryAddressCheckBoxValue: boolean;
  

  constructor( ){
  }
// ngOnInit: execute the code inside ngOnInit after class instantiated
  ngOnInit() {
  this.createCustomerForm();  
  this.primaryAddressCheckBoxValue = false;
  this.secondaryAddressCheckBoxValue = false;
  }

  createCustomerForm() {
    this.signupForm = new FormGroup<CustomerInfo>({
      basicInfo:  new FormGroup<BasicInfo>({
      firstName: new FormControl('',{validators: [Validators.required, NameValidator()]}),
      lastName: new FormControl('',{validators: [Validators.required, NameValidator()]}),
      email: new FormControl('',Validators.email),
      phone: new FormControl(null, {validators: [Validators.required, PhoneNumberValidation()]} )
     }),
     primaryAddress: new FormGroup<PrimaryAddress>({
      email: new FormControl('',Validators.email ),
      phone: new FormControl(null, {validators: [Validators.required, PhoneNumberValidation()]}),
      address: new FormControl('',Validators.required),
     city: new FormControl('',Validators.required),
     country: new FormControl('',Validators.required),
     postCode: new FormControl(null,Validators.required)
     }),
     secondaryAddress: new FormGroup<SecondaryAddress>({
       email: new FormControl('',Validators.email),
       phone: new FormControl(null, {validators: [Validators.required, PhoneNumberValidation()]}),
       address: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      country: new FormControl('',Validators.required),
      postCode: new FormControl(null,Validators.required)
     }),
     hobbies: new FormArray([])
    })
  }

  copyBasicInfoIntoPrimaryAddress() {
    this.primaryAddressCheckBoxValue=!this.primaryAddressCheckBoxValue;

    if (this.primaryAddressCheckBoxValue) {
      this.signupForm.controls.primaryAddress.controls.email.setValue(this.signupForm.controls.basicInfo.controls.email.value);
      this.signupForm.controls.primaryAddress.controls.phone.setValue(this.signupForm.controls.basicInfo.controls.phone.value);
    } else {
      this.signupForm.controls.primaryAddress.controls.email.setValue("");
      this.signupForm.controls.primaryAddress.controls.phone.setValue(null);
    }
  }

  copyPrimaryAddessIntoSecondaryAddress() {
    this.secondaryAddressCheckBoxValue=!this.secondaryAddressCheckBoxValue
    if (this.secondaryAddressCheckBoxValue) {
      this.signupForm.controls.secondaryAddress.controls.email.setValue(this.signupForm.controls.primaryAddress.controls.email.value);
      this.signupForm.controls.secondaryAddress.controls.phone.setValue(this.signupForm.controls.primaryAddress.controls.phone.value);
      this.signupForm.controls.secondaryAddress.controls.address.setValue(this.signupForm.controls.primaryAddress.controls.address.value);
      this.signupForm.controls.secondaryAddress.controls.city.setValue(this.signupForm.controls.primaryAddress.controls.city.value);
      this.signupForm.controls.secondaryAddress.controls.country.setValue(this.signupForm.controls.primaryAddress.controls.country.value);
      this.signupForm.controls.secondaryAddress.controls.postCode.setValue(this.signupForm.controls.primaryAddress.controls.postCode.value);
    } else {
        this.signupForm.controls.secondaryAddress.controls.email.setValue("");
        this.signupForm.controls.secondaryAddress.controls.phone.setValue(null);
        this.signupForm.controls.secondaryAddress.controls.address.setValue("");
        this.signupForm.controls.secondaryAddress.controls.city.setValue("");
        this.signupForm.controls.secondaryAddress.controls.country.setValue("");
        this.signupForm.controls.secondaryAddress.controls.postCode.setValue(null);
    }
  }

  onSubmit(){
    if (this.signupForm.valid) {
      console.log(this.signupForm.value);
      this.primaryAddressCheckBoxValue=false;
      this.secondaryAddressCheckBoxValue=false;
      let hobbyArray = this.signupForm.get('hobbies') as FormArray;
      for (let i=0; i<hobbyArray.length; i++){
      hobbyArray.removeAt(i)
      this.signupForm.reset();
    }  
    }
  }

  addHobby(){
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  onClear(){
    this.signupForm.reset();
  }
}
