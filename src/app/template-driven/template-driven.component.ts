import { Component,ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CustomerInfo } from './customer-info-type';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {
  @ViewChild('f')signupForm: NgForm;

  primaryAddressCheckBoxValue: boolean; 
  secondaryAddressCheckBoxValue: boolean;
  isDisablePrimaryAddress: boolean;
  isDisableSecondaryAddress: boolean;

  customer: CustomerInfo ={
    basicInfo:{
      firstName:'',
      lastName: '',
      email: '',
      phone: null
    },

    primaryAddress:{
      email: '',
      phone: null,
      address: '',
      city:'',
      country:'',
      postCode: ''
    },

    secondaryAddress: {
      email: '',
      phone: null,
      address: '',
      city:'',
      country:'',
      postCode: ''
    }
  }; 

 constructor(){
 }

 ngOnInit(): void {
   this.primaryAddressCheckBoxValue= false; 
   this.secondaryAddressCheckBoxValue= false;
   this.isDisablePrimaryAddress=false; 
   this.isDisableSecondaryAddress=false;;
   this.createSignUpForm();
 }
  
  onSubmit(){
    if(this.signupForm.valid) {
      console.log(this.signupForm.value)
      this.onClear();
    } 
  }

   createSignUpForm() {
    this.customer.basicInfo.firstName = this.signupForm?.value.firstname;
    this.customer.basicInfo.lastName = this.signupForm?.value.lastname;
    this.customer.basicInfo.email = this.signupForm?.value.email;
    this.customer.basicInfo.phone = this.signupForm?.value.phone;

    if(this.primaryAddressCheckBoxValue){
      this.customer.primaryAddress.email = this.signupForm?.value.email;
      this.customer.primaryAddress.phone = this.signupForm?.value.phone;
      this.customer.primaryAddress.address = this.signupForm?.value.paddress;
      this.customer.primaryAddress.city = this.signupForm?.value.pcity;
      this.customer.primaryAddress.country = this.signupForm?.value.pcountry;
      this.customer.primaryAddress.postCode = this.signupForm?.value.ppostcode;
    }else{
      this.customer.primaryAddress.email = this.signupForm?.value.pemail;
      this.customer.primaryAddress.phone = this.signupForm?.value.pphone;
      this.customer.primaryAddress.address = this.signupForm?.value.paddress;
      this.customer.primaryAddress.city = this.signupForm?.value.pcity;
      this.customer.primaryAddress.country = this.signupForm?.value.pcountry;
      this.customer.primaryAddress.postCode = this.signupForm?.value.ppostcode;
    }

    if(this.secondaryAddressCheckBoxValue) {
      this.customer.secondaryAddress.email = this.signupForm?.value.pemail;
      this.customer.secondaryAddress.phone = this.signupForm?.value.pphone;
      this.customer.secondaryAddress.address = this.signupForm?.value.paddress;
      this.customer.secondaryAddress.city= this.signupForm?.value.pcity;
      this.customer.secondaryAddress.country = this.signupForm?.value.pcountry;
      this.customer.secondaryAddress.postCode = this.signupForm?.value.ppostcode;
    }else{
      this.customer.secondaryAddress.email = this.signupForm?.value.semail;
      this.customer.secondaryAddress.phone = this.signupForm?.value.sphone;
      this.customer.secondaryAddress.address = this.signupForm?.value.saddress;
      this.customer.secondaryAddress.city= this.signupForm?.value.scity;
      this.customer.secondaryAddress.country = this.signupForm?.value.scountry;
      this.customer.secondaryAddress.postCode = this.signupForm?.value.spostcode;
    }
   }

   updatePrimaryCheckBox(){ 
    this.primaryAddressCheckBoxValue=!this.primaryAddressCheckBoxValue;
    if(this.primaryAddressCheckBoxValue){
      // make the email and phone input box read only when click primary address check box
      this.isDisablePrimaryAddress=!this.isDisablePrimaryAddress; 
    }else{
      this.isDisablePrimaryAddress=!this.isDisablePrimaryAddress;
    }
    this.copyBasicInfoIntoPrimaryAddress()
  }


  copyBasicInfoIntoPrimaryAddress() {
    if(this.primaryAddressCheckBoxValue) { 
      this.signupForm.controls.pemail.patchValue(this.signupForm.controls.email.value)
      this.signupForm.controls.pphone.patchValue(this.signupForm.controls.phone.value)

    }else{
      this.signupForm.controls.pemail.patchValue('')
      this.signupForm.controls.pphone.patchValue(null)
    }
  }

  updateSecondaryCheckBox(){
    this.secondaryAddressCheckBoxValue=!this.secondaryAddressCheckBoxValue;
    if(this.secondaryAddressCheckBoxValue){
      // make the all secondary input box read only when click secondary address check box
      this.isDisableSecondaryAddress=!this.isDisableSecondaryAddress
    }else{
      this.isDisableSecondaryAddress=!this.isDisableSecondaryAddress;
    }
    this.copyPrimaryAddressIntoSecondaryAddress()

  }

  copyPrimaryAddressIntoSecondaryAddress() {
    // this.secondaryAddressCheckBoxValue = !this.secondaryAddressCheckBoxValue
    
    if(this.secondaryAddressCheckBoxValue){
      this.signupForm.controls.semail.patchValue(this.signupForm.controls.pemail.value)
      this.signupForm.controls.sphone.patchValue(this.signupForm.controls.pphone.value)
      this.signupForm.controls.saddress.patchValue(this.signupForm.controls.paddress.value)
      this.signupForm.controls.scity.patchValue(this.signupForm.controls.pcity.value)
      this.signupForm.controls.scountry.patchValue(this.signupForm.controls.pcountry.value)
      this.signupForm.controls.spostcode.patchValue(this.signupForm.controls.ppostcode.value);
    }else{
      this.signupForm.controls.semail.patchValue('')
      this.signupForm.controls.sphone.patchValue(null)
      this.signupForm.controls.saddress.patchValue('')
      this.signupForm.controls.scity.patchValue('')
      this.signupForm.controls.scountry.patchValue('')
      this.signupForm.controls.spostcode.patchValue('');
    }
  }

  onClear(){
    this.primaryAddressCheckBoxValue=false
    this.secondaryAddressCheckBoxValue=false
    this.signupForm.reset()
  }

}
