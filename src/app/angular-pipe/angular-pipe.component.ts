import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './angular-pipe.component.html',
  styleUrls: ['./angular-pipe.component.css']
})
export class AngularPipeComponent implements OnInit {

  firstName: string;
  lastName: string;
  name: string;

  ngOnInit() {
    this.firstName='';
    this.lastName='';
    this.name='';
  }

  addName(fname: string, lname: string) {
    this.firstName = fname;
    this.lastName= lname;
    this.name = `${this.firstName} ${this.lastName}`;
  } 
}