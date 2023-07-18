import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { Response } from './response';

@Injectable({
  providedIn: 'root'
})

export class GameService {

  constructor(private http: HttpClient) {
  }

  check(symbolId: number): Observable<Response> {
    const url = 'http://localhost:8080/';
    const headers = new HttpHeaders().set('Accept', 'application/json');
    const params = new HttpParams().set('choice', symbolId);
    return this.http.get<Response>(url, { headers, params });
  }
}
