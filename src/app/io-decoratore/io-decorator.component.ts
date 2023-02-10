import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './io-decorator.component.html',
  styleUrls: ['./io-decorator.component.css']
})
export class IODecoratorComponent implements OnInit{
  parentData: string;
  childValue: string;

  ngOnInit(){
    this.parentData= '';
    this.childValue= '';
  }
  addParentValue(val: string){
    this.parentData=val;
  }

  childTwoValue(val: string){
    this.childValue=val
  }
}