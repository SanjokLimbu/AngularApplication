import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  constructor(private http: HttpClient) { }
  getCV(url: string): Observable<Blob> {
    const cvFilePathURL = "https://localhost:44346/";
    return this.http.get<Blob>(cvFilePathURL + url, {
      responseType: 'blob' as 'json'
    })
  }
}
