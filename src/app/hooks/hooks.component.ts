import { Component, OnInit, AfterViewInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css']
})
export class LifeCycleHookComponent implements OnInit, AfterViewInit {
  counter =1;
  name: string;
  ngonintStatus: string;
  constructor(){
    console.log("App Component Constrctor");
  }
  //initialize the directive or component after angular dispaly data bound property
  //if we want to execute any code immediately after instantiated the class, the code should put into this life cycle hook
  // intialize data in component , data fetching and something we want te see immediatly after page load
  ngOnInit() {
    console.log('onInit hook method');
    this.ngonintStatus= `Ng OnInit triggered`
  }
  // invoked after completed  initialization component view
  ngAfterViewInit(): void {
    console.log('AfterViewInit hook method');
    
  }
  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }
  //called before component / directive instance is destroyed
  // to avoid memory leaks 
  ngOnDestroy(): void {
  console.log('ngOnDestroy: clean up memory and unsubscribe observables');
  }
}