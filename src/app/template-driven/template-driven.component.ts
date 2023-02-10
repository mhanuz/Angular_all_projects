import { Component,ViewChild, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {
  @ViewChild('f')signupForm: NgForm;

  primaryCheckBoxValue: boolean; 
  secondaryCheckBoxValue: boolean;
  submitted: boolean;

  customer = {
    basicInfo: {
    firstname: '',
    lastname:'',
    email:'', 
    phone:null
  },

  primaryAddress:{
  email: '',
  phone: null,
  add: '',
  city:'',
  country:'',
  post: ''
  },

  secondaryAddress: {
    email: '',
    phone: null,
    add: '',
    city:'',
    country:'',
    post: ''
    }
  } 

  
 constructor(){
 }

 ngOnInit(): void {
   this.primaryCheckBoxValue = false;
   this.secondaryCheckBoxValue = false;
   this.submitted = false;
 }
  

  onSubmit(){
    this.submitted = true;

    if(this.signupForm.valid) {
      this.signupFormSubmission()
    }

    this.signupForm.reset();
  }

   signupFormSubmission() {
    this.customer.basicInfo.firstname = this.signupForm.value.firstname;
    this.customer.basicInfo.lastname = this.signupForm.value.lastname;
    this.customer.basicInfo.email = this.signupForm.value.email;
    this.customer.basicInfo.phone = this.signupForm.value.phone;

    if(this.primaryCheckBoxValue === true){
      this.primaryCheckBoxValue = false;
      this.customer.primaryAddress.phone = this.signupForm.value.phone;
      this.customer.primaryAddress.email = this.signupForm.value.email;
      this.customer.primaryAddress.add = this.signupForm.value.address;
      this.customer.primaryAddress.city = this.signupForm.value.city;
      this.customer.primaryAddress.country = this.signupForm.value.country;
      this.customer.primaryAddress.post = this.signupForm.value.postcode;
    }else{
      this.customer.primaryAddress.email = this.signupForm.value.pemail;
      this.customer.primaryAddress.phone = this.signupForm.value.pphone;
      this.customer.primaryAddress.add = this.signupForm.value.address;
      this.customer.primaryAddress.city = this.signupForm.value.city;
      this.customer.primaryAddress.country = this.signupForm.value.country;
      this.customer.primaryAddress.post = this.signupForm.value.postcode;
    }

    
    if(this.secondaryCheckBoxValue === true) {
      this.secondaryCheckBoxValue = false
      this.customer.secondaryAddress.email = this.signupForm.value.pemail;
      this.customer.secondaryAddress.phone = this.signupForm.value.pphone;
      this.customer.secondaryAddress.add = this.signupForm.value.address;
      this.customer.secondaryAddress.city= this.signupForm.value.city;
      this.customer.secondaryAddress.country = this.signupForm.value.country;
      this.customer.secondaryAddress.post = this.signupForm.value.postcode;
    }else{
      this.customer.secondaryAddress.email = this.signupForm.value.semail;
      this.customer.secondaryAddress.phone = this.signupForm.value.sphone;
      this.customer.secondaryAddress.add = this.signupForm.value.saddress;
      this.customer.secondaryAddress.city= this.signupForm.value.scity;
      this.customer.secondaryAddress.country = this.signupForm.value.scountry;
      this.customer.secondaryAddress.post = this.signupForm.value.spostcode;
    }
   }

  copyBasicInfoIntoPrimaryAddress() {
    this.primaryCheckBoxValue = !this.primaryCheckBoxValue

    if(this.primaryCheckBoxValue) {
      this.customer.primaryAddress.email=this.signupForm.value.email;
      this.customer.primaryAddress.phone=this.signupForm.value.phone;
      console.log(this.primaryCheckBoxValue);
      
    }else{
      this.customer.primaryAddress.email=''
      this.customer.primaryAddress.phone=''
    }

  }

  copyPrimaryAddressIntoSecondaryAddress() {
    this.secondaryCheckBoxValue = !this.secondaryCheckBoxValue
    
    if(this.secondaryCheckBoxValue){
      this.customer.secondaryAddress.email = this.signupForm.value.pemail;
      this.customer.secondaryAddress.phone = this.signupForm.value.pphone;
      this.customer.secondaryAddress.add = this.signupForm.value.address;
      this.customer.secondaryAddress.city= this.signupForm.value.city;
      this.customer.secondaryAddress.country = this.signupForm.value.country;
      this.customer.secondaryAddress.post = this.signupForm.value.postcode;
    }else{
      this.customer.secondaryAddress.email = '';
      this.customer.secondaryAddress.phone = '';
      this.customer.secondaryAddress.add = '';
      this.customer.secondaryAddress.city= '';
      this.customer.secondaryAddress.country = '';
      this.customer.secondaryAddress.post = '';
    }
    
  }

  onClear(){
    this.signupForm.reset()
  }

}