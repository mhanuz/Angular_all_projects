import { Pipe, PipeTransform, OnInit } from '@angular/core';

@Pipe({
  name: 'nameswap'
})
export class NameSwapPipe implements PipeTransform, OnInit {

  firstName: string;
  lastName: string;

  ngOnInit(): void {
    this.firstName = '';
    this.lastName = '';
  }

  transform(value: string): string {
      this.firstName=value.split(' ')[0]
      this.lastName=value.split(' ')[1]
      return this.lastName + " "+ this.firstName;  
  }
}
