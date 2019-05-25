import {Component, Input, OnInit} from '@angular/core';
import {LanguageUnit} from '../models/language_unit.class';

@Component({
  selector: 'app-word-button',
  templateUrl: './word-button.component.html',
  styleUrls: ['../app.component.css', './word-button.component.css']
})
export class WordButtonComponent implements OnInit {

  @Input( 'wordType' )  wordType: string ;
  @Input( 'wordId' )    wordId: string ;
  @Input( 'languageUnit' ) languageUnit: LanguageUnit ;
  @Input( 'language' )  language: string ;

  name: string;

  constructor() { }

  ngOnInit() {
    this.name = this.languageUnit[this.language];
  }

}
