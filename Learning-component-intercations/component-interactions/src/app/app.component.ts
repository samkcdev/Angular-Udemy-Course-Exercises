import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  message = "This me your parent";
  names = ["SuperMan", "Batman", "Wonder Woman"];

  receivedNumb: number;

  onIncrement($event) {
    this.receivedNumb = $event;
  }
}
