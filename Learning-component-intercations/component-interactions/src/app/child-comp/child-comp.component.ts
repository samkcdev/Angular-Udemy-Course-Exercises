import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-child-comp",
  templateUrl: "./child-comp.component.html",
  styleUrls: ["./child-comp.component.css"]
})
export class ChildCompComponent implements OnInit {
  initNumb = 0;
  @Input() childElement;
  @Output() incrementing = new EventEmitter<number>();
  constructor() {}

  ngOnInit() {}

  incrementNum() {
    this.incrementing.emit(this.initNumb++);
  }
}
