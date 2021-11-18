import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  ngOnInit() {}

  constructor(private translate: TranslateService) {
    translate.setDefaultLang("en");
  }

  status: boolean = false;
  state: boolean = false;

  linkState(state: any) {
    this.state = !this.state;
  }

  switchLanguage(language: string) {
    this.translate.use(language);
    this.status = !this.status;
  }
}
