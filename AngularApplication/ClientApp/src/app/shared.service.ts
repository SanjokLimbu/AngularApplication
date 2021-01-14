import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  cvFilePathURL = "https://localhost:44346/api/Download";
  constructor(private http: HttpClient) { }
  getCV(): Observable<any> {
    return this.http.get(this.cvFilePathURL, {
      observe: 'response',
      responseType: 'text'
    });
  }
}
