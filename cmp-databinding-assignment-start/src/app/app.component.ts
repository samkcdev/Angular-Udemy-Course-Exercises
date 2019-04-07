import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  captureIncrement: any;
  intervalKeeper: any;
  even: number;
  odd: number;

  // startEmitted(increase) {
  //   this.intervalKeeper = setInterval(() => {
  //     this.captureIncrement = increase++;
  //     if (this.captureIncrement % 2 === 0) {
  //       this.even = this.captureIncrement;
  //     } else {
  //       this.odd = this.captureIncrement;
  //     }
  //   }, 1000);
  // }

  // solution

  startEmitted($event) {
    this.captureIncrement = $event;
    if (this.captureIncrement % 2 === 0) {
            this.even = this.captureIncrement;
          } else {
            this.odd = this.captureIncrement;
          }
  }

//   stopEmitter() {
//     clearInterval(this.intervalKeeper);
//   }
// }
