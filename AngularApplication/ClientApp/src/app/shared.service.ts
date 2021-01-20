import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  constructor(private http: HttpClient) { }
  getCV(): Observable<any> {
    const cvFilePathURL = "https://limbu-portfolio.azurewebsites.net/api/Download";
    return this.http.get(cvFilePathURL,
      {
        responseType: 'blob'
      });
  }
}
