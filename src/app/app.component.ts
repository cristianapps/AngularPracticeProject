import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "AngularPractice";

  teams$: Observable<any> = this.http.get("/api/teams");
  books$: Observable<any> = this.http.get("/api/books");

  constructor(
    private translate: TranslateService,
    public router: Router,
    private http: HttpClient
  ) {
    translate.setDefaultLang("en");
  }
}
