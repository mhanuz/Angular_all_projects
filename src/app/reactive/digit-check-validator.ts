import { AbstractControl, ValidatorFn } from "@angular/forms";

// ValidatorFn: receive a control, if there is an error trigger the validator otherwise return null 
export function DigitCheckValidation(): ValidatorFn {
    return(control: AbstractControl): {[key: string]: boolean}| null => {
        if(control.value !== null) {
            
            if(!Number(control.value)){
                return {"NotADigit": true}
            }else{
               return null
            }     
        }else{
            return null
        }
    }
}