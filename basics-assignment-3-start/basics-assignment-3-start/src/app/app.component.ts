import { Component } from '@angular/core';
import { callLifecycleHooksChildrenFirst } from '@angular/core/src/view/provider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
// this is setting the value for this variable for the first time
para = true;
buttonLog = 0;
buttonlogArray = [];

paraToggle() {
  // This acts like a switch
  // First time when you click
  // it turns this.para value it into(!this.para) false
  // again when clicked since the value is false !this.para will change this.para value to true
  // so acting like a switch
  this.para = !this.para;
  console.log(this.para);
  this.buttonlogArray.push(this.buttonLog++);
}



}
