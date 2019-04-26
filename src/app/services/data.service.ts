import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // private dataUrl = 'http://18.191.232.10:8080/ajax/phrase';
  // private dataUrl = 'localhost:8080/ajax/phrase';
  private dataUrl = 'api/v1/phrase';

  constructor(private http: HttpClient) { }

  getNewString(): Observable< any > {

    const params = new HttpParams()
      .set('phraseType', 'noun');

    return this.http.get(this.dataUrl, { params } );
  }

}
