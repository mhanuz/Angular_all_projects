import { FormGroup, FormControl, FormArray } from "@angular/forms"

export interface CustomerInfo {
  basicInfo: FormGroup<BasicInfo>, 
  primaryAddress: FormGroup<PrimaryAddress>, 
  secondaryAddress: FormGroup<SecondaryAddress>,
  hobbies:FormArray;
}
//formgroup: combines formcontrols into an object,formcontrol name is the key of object 
//formcontrol: contain data, value and validation information
//FormArray: add and remove formcontrol at runtime, combines values into an array
export interface BasicInfo{
  firstName: FormControl<string>,
  lastName: FormControl<string>,
  email?: FormControl<string>,
  phone: FormControl<number>
}
export interface PrimaryAddress{
  email?: FormControl<string>,
  phone: FormControl<number>,
  address: FormControl<string>,
  city: FormControl<string>,
  country: FormControl<string>,
  postCode: FormControl<string | number>
}
export interface SecondaryAddress{
  email?: FormControl<string>,
  phone: FormControl<number>,
  address: FormControl<string>,
  city: FormControl<string>,
  country: FormControl<string>,
  postCode: FormControl<string | number>
}