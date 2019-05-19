import {Component, Input, OnInit} from '@angular/core';
import {LanguageUnit} from '../models/language_unit.class';

@Component({
  selector: 'app-word-identification',
  templateUrl: './word-identification.component.html',
  styleUrls: ['../app.component.css', './word-identification.component.css']
})
export class WordIdentificationComponent implements OnInit {

  @Input( 'languageUnit' ) languageUnit: LanguageUnit ;
  @Input( 'language ') language: LanguageUnit ;

  name: string;
  routeLink: string;

  constructor() { }

  ngOnInit() {
    this.name = this.languageUnit[this.language];
    this.routeLink = '***';
  }

}
