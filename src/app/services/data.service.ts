import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private newPhraseUrl = 'api/v1/phrase';
  private wordInformationUrl = 'api/v1/word';

  constructor(private http: HttpClient) { }

  getNewPhrase(phraseType: string): Observable< any > {

    const params = new HttpParams()
      .set('phraseType', phraseType);

    return this.http.get(this.newPhraseUrl, { params } );
  }

  getWordInformation(wordType: string, wordId: string): Observable< any > {

    const fullWordInformationUrl = this.wordInformationUrl
        + '/' + wordType
        + '/' + wordId;

    return this.http.get(fullWordInformationUrl);
  }

}
