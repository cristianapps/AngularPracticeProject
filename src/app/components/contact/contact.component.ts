import { Observable } from 'rxjs';

// import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { DatabaseService } from '../../services/database.service';

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"],
})
export class ContactComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    // private http: HttpClient,
    private team: DatabaseService
  ) {}
  contactForm: FormGroup;

  // allData: Observable<any> = this.http.get("/papers");

  isShown: boolean = false; // hidden by default
  isShownAlert: boolean = false; // hidden by default

  isChecked = true;

  acceptNotifications: Boolean;

  selectPosition: any = [
    "CONTACT.SELECT.manager",
    "CONTACT.SELECT.employee",
    "CONTACT.SELECT.freelancer",
  ];

  public positions: string[] = [
    "CONTACT.SELECT.manager",
    "CONTACT.SELECT.employee",
    "CONTACT.SELECT.freelancer",
  ];

  toggleShow() {
    this.isShown = !this.isShown;
  }
  toggleShowAlert(): any {
    this.isShownAlert = !this.isShownAlert;
  }

  teams$ = {};

  ngOnInit() {
    this.contactForm = this.fb.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      phoneNumber: ["", Validators.required],
      emailAddress: [
        "",
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"),
      ],
      selectPosition: "",
      acceptNotifications: "",
      httpAddress: "",
    });
    this.team.getDbData().subscribe((allData) => {
      console.log(allData);
      this.teams$ = allData;
    });
  }

  onSubmit(form: FormGroup) {
    console.log("Valid?", form.valid); // true or false
    console.log("First Name", form.value.firstName);
    console.log("Last Name", form.value.lastName);
    console.log("Email", form.value.emailAddress);
    console.log("Phone", form.value.phoneNumber);
    console.log("Position", form.value.selectPosition);
    console.log("Notifications", form.value.acceptNotifications);
    console.log("Website", form.value.httpAddress);
  }
}
