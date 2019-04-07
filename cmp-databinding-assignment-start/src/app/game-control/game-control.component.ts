import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-game-control",
  templateUrl: "./game-control.component.html",
  styleUrls: ["./game-control.component.css"]
})
export class GameControlComponent implements OnInit {
  catchInterval: any;
  incrementer = 0;

  @Output() onGameStarted = new EventEmitter<number>();

  // @Output() onGameStops = new EventEmitter<number>();
  constructor() {}

  ngOnInit() {}

  onStartGame() {
    /*note: use arrow function while using setInterval in angular
    because the 'this' within it will not point to the variable
    declared outside.*/
    // the solution:
    this.catchInterval = setInterval(() => {
      this.onGameStarted.emit(this.incrementer + 1);
      this.incrementer++;
    }, 1000);

    // this.onGameStarted.emit(this.incrementer + 1);
  }
  onStopGame() {
    clearInterval(this.catchInterval);
  }
}
