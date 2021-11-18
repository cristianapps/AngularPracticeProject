import { Component, OnInit } from '@angular/core';

import { GeneralService } from '../../services/general.service';

@Component({
  selector: "app-intro",
  templateUrl: "./intro.component.html",
  styleUrls: ["./intro.component.scss"],
})
export class IntroComponent {
  constructor(private generalService: GeneralService) {}

  displayMessage(): void {
    this.generalService.displayMessage();
  }
}
