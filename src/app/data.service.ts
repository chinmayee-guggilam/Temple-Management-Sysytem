import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost:3000/data';

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    console.log('Fetching data from:', this.apiUrl); // Log API URL
    return this.http.get<any>(this.apiUrl);
  }

}
