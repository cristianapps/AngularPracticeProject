import { Component, OnInit, Output } from '@angular/core';

import { GeneralService } from '../../services/general.service';

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"],
})
export class AboutComponent implements OnInit {
  isDisplayed: boolean = false;
  isShownAlert: boolean = false;

  constructor() {}
  ngOnInit(): void {}

  toggleShow() {
    this.isDisplayed = !this.isDisplayed;
  }

  toggleShowAlert() {
    this.isShownAlert = !this.isShownAlert;
  }
}
