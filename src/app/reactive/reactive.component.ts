import { Component, OnInit, OnDestroy} from '@angular/core';
import { Validators, FormArray,FormGroup, FormControl} from '@angular/forms';
import { NameValidator } from './name-validator';
import { PhoneNumberValidation} from './phone-number-length-validator'
import { DigitCheckValidation} from './digit-check-validator'
import { CustomerInfo, BasicInfo, PrimaryAddress, SecondaryAddress } from './customer-info-type';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})

export class ReactiveFormComponent implements OnInit, OnDestroy{

  signupForm: FormGroup<CustomerInfo>;
  isCollapse: boolean;
  valueChangesStatus;
  
  constructor( private router: Router, private activatedRoute: ActivatedRoute){
  }

// ngOnInit: execute the code inside ngOnInit after class instantiated
  ngOnInit() {
    this.createCustomerForm();  
    this.listenIsSameAsBasicInfoAddress();
    this.listenIsSameAsPrimaryAddress();
    this.isCollapse = false;
    if(this.activatedRoute.snapshot.queryParamMap.get('isCollapse')){
      this.isCollapse=true;
    }
  }

  createCustomerForm() {
    this.signupForm = new FormGroup<CustomerInfo>({
      isSameAsBasicInfoAddress: new FormControl<boolean>(false, { nonNullable: true}),
      isSameAsPrimaryAddress: new FormControl<boolean>(false, { nonNullable: true}),
        basicInfo:  new FormGroup<BasicInfo>({
          firstName: new FormControl('',{validators: [Validators.required, NameValidator(),Validators.minLength(4), Validators.maxLength(10)]}),
          lastName: new FormControl('',{validators: [Validators.required,Validators.minLength(4), Validators.maxLength(10), NameValidator()]}),
          email: new FormControl('', Validators.email ),
          phone: new FormControl(null, {validators: [Validators.required, PhoneNumberValidation(),  DigitCheckValidation()]} )
     }),
        primaryAddress: new FormGroup<PrimaryAddress>({
          email: new FormControl('', Validators.email),
          phone: new FormControl(null, {validators: [Validators.required, PhoneNumberValidation(),  DigitCheckValidation()]} ),
          address: new FormControl('',Validators.required),
          city: new FormControl('',Validators.required),
          country: new FormControl('',Validators.required),
          postCode: new FormControl(null,{validators: [Validators.required, Validators.maxLength(5)]})
     }),
        secondaryAddress: new FormGroup<SecondaryAddress>({
          email: new FormControl('', Validators.email),
          phone: new FormControl(null, {validators: [PhoneNumberValidation(), DigitCheckValidation()]}),
          address: new FormControl(''),
          city: new FormControl(''),
          country: new FormControl(''),
          postCode: new FormControl(null, Validators.maxLength(5))
     }),
        hobbies: new FormArray([])
    })
  }

  /**
   * @description copy mail and phone from basicInfoAddress into primaryAddress  
   */
  listenIsSameAsBasicInfoAddress() {
     this.valueChangesStatus = this.signupForm.controls.isSameAsBasicInfoAddress.valueChanges.subscribe((isSameAsBasicInfoAddress)=>{
      ['email','phone'].forEach((field)=>{
          if(isSameAsBasicInfoAddress){
            this.signupForm.controls.primaryAddress.controls[field].patchValue(this.signupForm.controls.basicInfo.controls[field].value);
            this.signupForm.controls.primaryAddress.controls[field].disable();
          } else {
            this.signupForm.controls.primaryAddress.controls[field].patchValue('');
            this.signupForm.controls.primaryAddress.controls[field].enable();
          } 
          this.signupForm.controls.basicInfo.controls[field].valueChanges.subscribe((basicInfo)=>{
            if(basicInfo !== null){
              this.signupForm.controls.primaryAddress.controls[field].setValue(basicInfo)
          }
        })
      })
    })
  }


  /**
   * @description if it is listen then primary address will be copied into secondary address
   */
  listenIsSameAsPrimaryAddress(){
    this.signupForm.controls.isSameAsPrimaryAddress.valueChanges.subscribe((isSameAsPrimaryAddress) => {
      ['email','phone','address','city','country','postCode'].forEach((field) => {
          if(isSameAsPrimaryAddress) {
            this.signupForm.controls.secondaryAddress.controls[field].patchValue(this.signupForm.controls.primaryAddress.controls[field].value)
            this.signupForm.controls.secondaryAddress.controls[field].disable();  
          } else {
            this.signupForm.controls.secondaryAddress.controls[field].patchValue('')
            this.signupForm.controls.secondaryAddress.controls[field].enable(); 
          }
          
          this.signupForm.controls.primaryAddress.controls[field].valueChanges.subscribe((primaryAddress) => {
              if(primaryAddress !== null){
                this.signupForm.controls.secondaryAddress.controls[field].patchValue(primaryAddress)
              }
            })
      })
    })
  }

  onSubmit(){
    if (this.signupForm.valid) {
      // getraw value will show disable value also
      console.log(this.signupForm.getRawValue());
      this.onClear();
    }
  }

  toggleSecodaryAddres(){
    this.isCollapse = !this.isCollapse
    this.router.navigate(['reactive-form'], {queryParams:{isCollapse:this.isCollapse}})
  }

  addHobby(){
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  onClear(){
    this.signupForm.controls.hobbies.clear(); // reset form array 
    this.signupForm.reset();
  }

  ngOnDestroy(): void {
    this.valueChangesStatus.unsubscribe();
  }

}
