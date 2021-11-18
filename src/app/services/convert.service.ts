import { Injectable } from '@angular/core';

@Injectable({
  providedIn: "root",
})
export class ConvertService {
  constructor() {}

  public first_price: any = "100";
  public convert_price: any = "";

  convertPrice() {
    this.convert_price = this.first_price * 1.16;
    return this.convert_price;
  }
}
