import { AbstractControl, ValidatorFn } from "@angular/forms";

export function NameValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: boolean} | null => {
        if(control.value !== null){
            if(control.value.toString().indexOf(".") !==-1){
                return {'DotNotation': true}
            }else{
                return null
            }
        }else{
            return null
        }
        
    }
}
