import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { Response } from './response';
import { environment} from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})

export class GameService {

  constructor(private http: HttpClient) {
  }

  check(symbolId: number): Observable<Response> {
    const url = environment.apiBaseUrl + "/";
    const headers = new HttpHeaders().set('Accept', 'application/json');
    const params = new HttpParams().set('symbolId', symbolId);
    return this.http.get<Response>(url, { headers, params });
  }
}
