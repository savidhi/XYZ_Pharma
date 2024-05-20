import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkcasing'
})
export class CheckcasingPipe implements PipeTransform {

  transform(value:string, args?: any): any {
    
    value = value.toUpperCase() + args;
    console.log(value);
    //convert quater to uppercase and then combine the quater and year entered 
    return value;
    
  }

}
