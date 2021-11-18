import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: "root",
})
export class CommentsService {
  url = "http://localhost:3000/comments";
  constructor(private http: HttpClient) {}
  saveCommentData(data: any) {
    console.log(data);
    return this.http.post(this.url, data);
  }
  deleteComment(id: any) {
    return this.http.delete(`${this.url}/${id}`);
  }
  getComments() {
    return this.http.get(this.url);
  }
  getCommentById(id: number) {
    return this.http.get(`${this.url}/${id}`);
  }
  updateCommentData(id: number, data: any) {
    return this.http.put(`${this.url}/${id}`, data);
  }
}
