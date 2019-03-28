import { Component } from "@angular/core";
import { callLifecycleHooksChildrenFirst } from "@angular/core/src/view/provider";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  hideP = true;
  logs = [];
  increment = 1;
  hideDetails() {
    this.hideP = !this.hideP;
    this.logs.push(this.increment++);
  }
}
