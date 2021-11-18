import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: "app-about-details",
  templateUrl: "./about-details.component.html",
  styleUrls: ["./about-details.component.scss"],
})
export class AboutDetailsComponent implements OnInit {
  isShownAlert: boolean = false;
  @Output() showAlert = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  @Input() isDisplayed: boolean;

  toggleShowAlert() {
    this.showAlert.emit();
  }
}
