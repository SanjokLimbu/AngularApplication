import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  cvFilePathURL = "https://localhost:44346/api/Download";
  constructor(private http: HttpClient) { }
  public getCV(): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Accept', 'application/msword');
    return this.http.get(this.cvFilePathURL, {
      headers: headers,
      observe: 'response',
      responseType: 'text'
    });
  }
}
