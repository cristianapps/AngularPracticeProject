import { Injectable } from '@angular/core';

@Injectable({
  providedIn: "root",
})
export class GeneralService {
  constructor() {}

  public alertMessage: string =
    "This page cannot be accessed! Sorry for the inconveninece.";

  displayMessage() {
    alert(this.alertMessage);
  }
}
