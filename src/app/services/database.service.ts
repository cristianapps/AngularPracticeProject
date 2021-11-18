import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: "root",
})
export class DatabaseService {
  url = "http://localhost:3000/papers";
  constructor(private http: HttpClient) {}
  getDbData() {
    return this.http.get(this.url);
  }
}
