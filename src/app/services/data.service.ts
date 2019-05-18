import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private dataUrl = 'api/v1/phrase';

  constructor(private http: HttpClient) { }

  getNewPhrase(phraseType: string): Observable< any > {

    const params = new HttpParams()
      .set('phraseType', phraseType);

    return this.http.get(this.dataUrl, { params } );
  }

}
