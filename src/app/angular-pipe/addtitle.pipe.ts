import {Pipe, PipeTransform} from '@angular/core'

@Pipe({
    name:'addtitle'
})

export class AddNameTitle implements PipeTransform{
    transform(name: string, gender: string ) {
        if(gender=="M"){
            return `Mr. ${name}`
        }else if(gender=='F'){
            return `Mrs. ${name}`
        }else{
            return ` ??   ${name}`
        }
    }
}
// pipe is a function, used to transform data for display
// pipetransform is an interface that is implemented by pipe