// import { Observable } from 'rxjs';

import { Component, OnInit } from '@angular/core';
import { FlexAlignStyleBuilder } from '@angular/flex-layout';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule, Routes } from '@angular/router';

import { CommentsService } from '../../services/comments.service';
import { ConvertService } from '../../services/convert.service';
import { DatabaseService } from '../../services/database.service';
import { GeneralService } from '../../services/general.service';

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"],
})
export class ProductComponent implements OnInit {
  first_price: any = "100";
  convert_price: any = "";

  isDisplayed = false;

  constructor(
    private fb: FormBuilder,
    private convertService: ConvertService,
    private generalService: GeneralService,
    private comment: CommentsService,
    private paper: DatabaseService,
    private router: ActivatedRoute
  ) {}

  commentForm: FormGroup;
  commentEditForm: FormGroup;

  displayMessage(): void {
    this.generalService.displayMessage();
  }

  papers$ = {};
  comments$ = {};
  message: boolean = false;

  ngOnInit(): void {
    this.convert_price = this.convertService.convertPrice();
    this.paper.getDbData().subscribe((allData) => {
      this.papers$ = allData;
    });
    this.commentForm = this.fb.group({
      title: ["", Validators.required],
      author: ["", Validators.required],
      content: [""],
    });
    this.commentEditForm = this.fb.group({
      title: ["title"],
      author: ["author"],
      content: ["content"],
    });
    this.comment.getComments().subscribe((allData) => {
      console.log(allData);
      this.comments$ = allData;
    });

    this.comment
      .getCommentById(this.router.snapshot.params.id)
      .subscribe((result: any) => {
        // console.log(result);
        // this.commentEditForm = this.fb.group({
        //   title: new FormControl(result["title"]),
        //   author: new FormControl(result["author"]),
        //   content: new FormControl(result["content"]),
        // });
        this.commentEditForm = this.fb.group({
          title: result["title"],
          author: result["author"],
          content: result["content"],
        });
      });
  }

  toggleShow() {
    this.ngOnInit();
    this.isDisplayed = !this.isDisplayed;
  }

  deleteComment(comment_id: any) {
    console.log(comment_id);
    this.comment.deleteComment(comment_id).subscribe((result) => {
      this.ngOnInit();
    });
  }

  SaveData() {
    // console.log(this.commentForm.value);
    this.comment.saveCommentData(this.commentForm.value).subscribe((result) => {
      // console.log(result);
      this.ngOnInit();
      this.message = true;
    });
  }

  UpdateData() {
    this.comment
      .updateCommentData(
        this.router.snapshot.params.id,
        this.commentEditForm.value
      )
      .subscribe((result) => {
        this.ngOnInit();
      });
  }

  TriggerMatch() {
    this.ngOnInit();
  }

  onSubmit(form: FormGroup) {
    console.log("Valid?", form.valid); // true or false
    console.log("Title", form.value.title);
    console.log("Author", form.value.author);
    console.log("Comment", form.value.content);
  }
}
