import { Component,ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


interface Customer {
  basicInfo: basicInfo;
  primaryAddress: primaryAddress;
  secondaryAddress: secondaryAddress;
}

interface  basicInfo{
    firstName: string;
    lastName: string;
    email: string;
    phone: number;
  }

interface  primaryAddress{
    email: string;
    phone: number;
    address: string;
    city: string;
    country: string;
    postcode: string;
  }

 interface secondaryAddress{
    email: string;
    phone: number;
    address: string;
    city: string;
    country: string;
    postcode: string; 
  }


@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {
  @ViewChild('f')signupForm: NgForm;

  primaryCheckBoxValue: boolean; 
  secondaryCheckBoxValue: boolean;

  customer: Customer ={
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
      postcode: ''
    },

    secondaryAddress: {
    email: '',
    phone: null,
    address: '',
    city:'',
    country:'',
    postcode: ''
    }
  }; 

 constructor(){
 }

 ngOnInit(): void {
  this.primaryCheckBoxValue= false; 
  this.secondaryCheckBoxValue= false;
  this.createSignUpForm();
 }
  
  onSubmit(){
    if(this.signupForm.valid) {
      console.log(this.signupForm.value)
      this.signupForm.reset();
    } 
  }

   createSignUpForm() {
    
    this.customer.basicInfo.firstName = this.signupForm.value.firstname;
    this.customer.basicInfo.lastName = this.signupForm.value.lastname;
    this.customer.basicInfo.email = this.signupForm.value.email;
    this.customer.basicInfo.phone = this.signupForm.value.phone;

    if(this.primaryCheckBoxValue){
      this.primaryCheckBoxValue = false;
      this.customer.primaryAddress.email = this.signupForm.value.email;
      this.customer.primaryAddress.phone = this.signupForm.value.phone;
      this.customer.primaryAddress.address = this.signupForm.value.paddress;
      this.customer.primaryAddress.city = this.signupForm.value.pcity;
      this.customer.primaryAddress.country = this.signupForm.value.pcountry;
      this.customer.primaryAddress.postcode = this.signupForm.value.ppostcode;
    }else{
      this.customer.primaryAddress.email = this.signupForm.value.pemail;
      this.customer.primaryAddress.phone = this.signupForm.value.pphone;
      this.customer.primaryAddress.address = this.signupForm.value.paddress;
      this.customer.primaryAddress.city = this.signupForm.value.pcity;
      this.customer.primaryAddress.country = this.signupForm.value.pcountry;
      this.customer.primaryAddress.postcode = this.signupForm.value.ppostcode;
    }

    if(this.secondaryCheckBoxValue) {
      this.secondaryCheckBoxValue = false
      this.customer.secondaryAddress.email = this.signupForm.value.email;
      this.customer.secondaryAddress.phone = this.signupForm.value.phone;
      this.customer.secondaryAddress.address = this.signupForm.value.address;
      this.customer.secondaryAddress.city= this.signupForm.value.city;
      this.customer.secondaryAddress.country = this.signupForm.value.country;
      this.customer.secondaryAddress.postcode = this.signupForm.value.postcode;
    }else{
      this.customer.secondaryAddress.email = this.signupForm.value.email;
      this.customer.secondaryAddress.phone = this.signupForm.value.phone;
      this.customer.secondaryAddress.address = this.signupForm.value.address;
      this.customer.secondaryAddress.city= this.signupForm.value.city;
      this.customer.secondaryAddress.country = this.signupForm.value.country;
      this.customer.secondaryAddress.postcode = this.signupForm.value.postcode;
    }
   }


  copyBasicInfoIntoPrimaryAddress() {
    this.primaryCheckBoxValue = !this.primaryCheckBoxValue
    // update the form
    if(this.primaryCheckBoxValue) { 
      this.signupForm.controls.pemail.setValue(this.signupForm.controls.email.value)
      this.signupForm.controls.pphone.setValue(this.signupForm.controls.phone.value)

    }else{
      this.signupForm.controls.pemail.setValue('')
      this.signupForm.controls.pphone.setValue(null)
    }
  }

  copyPrimaryAddressIntoSecondaryAddress() {
    this.secondaryCheckBoxValue = !this.secondaryCheckBoxValue
    
    if(this.secondaryCheckBoxValue){
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
    this.signupForm.reset()
  }

}
