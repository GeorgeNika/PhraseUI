import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataService } from '../services/data.service';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-phrase',
  templateUrl: './phrase.component.html',
  animations: [
    trigger('newQuestion', [
      state('wait', style({opacity: .3})),
      transition('* => wait', animate('1.5s', style({opacity: .1}))),
      transition('wait => *', animate('1.5s', style({opacity: 1})))
    ])
  ],
  styleUrls: ['../app.component.css', './phrase.component.css']
})
export class PhraseComponent implements OnInit {

  HEBREW = 'hebrew';
  RUSSIAN = 'russian';
  TRANSCRIPTION = 'voice';
  TRANSCRIPTION_FOR_LANGUAGE_UNIT = 'transcription';

  LEFT_DIRECTION_CLASS = 'text-left';
  RIGHT_DIRECTION_CLASS = 'text-right';

  animationTriggerState = 'wait';

  question = ' _ ';
  firstAnswer = '';
  secondAnswer = '';

  firstAnswerCaption = ' _ ';
  secondAnswerCaption = ' _ ';

  wordButtons = [];
  currentTranslateDirection = '';

  questionTextDirectionClass = this.LEFT_DIRECTION_CLASS;
  firstAnswerTextDirectionClass = this.LEFT_DIRECTION_CLASS;
  secondAnswerTextDirectionClass = this.LEFT_DIRECTION_CLASS;

  answersVisibility = {
    answerFirstVisibility: false,
    answerSecondVisibility: false,
    wordsVisibility: false
  };

  phraseTypes = [
    {name: 'verb ->',     forApiValue: 'verb'},
    {name: 'number ->',   forApiValue: 'number'},
    {name: 'fractional_number ->', forApiValue: 'fractional_number'},
    {name: 'noun ->',     forApiValue: 'noun'},
    {name: 'sentence ->', forApiValue: 'sentence'},
    {name: 'adverb ->',   forApiValue: 'adverb'}
  ];

  phraseTypeForm = new FormGroup({
    selectedPhraseType: new FormControl(this.phraseTypes[3]),
  });

  translateDirections = [
    {name: 'russian ->',    forShowValue: 'russian'},
    {name: 'hebrew ->',     forShowValue: 'hebrew'},
    {name: 'voice ->',      forShowValue: 'voice'}
  ];

  translateDirectionForm = new FormGroup({
    selectedTranslateDirection: new FormControl(this.translateDirections[1]),
  });

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.clearAnswers();
    this.getNewPhrase();
  }

  getSelectedPhraseType() {
    const phraseTypeFormResult = this.phraseTypeForm.value;
    const phraseTypeResult = phraseTypeFormResult.selectedPhraseType;
    return phraseTypeResult.forApiValue;
  }

  getSelectedTranslateDirection() {
    const translateDirectionFormResult = this.translateDirectionForm.value;
    const translateDirectionResult = translateDirectionFormResult.selectedTranslateDirection;
    return translateDirectionResult.forShowValue;
  }

  getNewPhrase() {
    this.animationTriggerState = 'wait';
    this.clearAnswers();
    this.dataService.getNewPhrase(this.getSelectedPhraseType()).subscribe( val => {
      this.setNewPhrase(val);
    });
  }

  setNewPhrase(val) {
    const translateDirection = this.getSelectedTranslateDirection();
    this.animationTriggerState = 'newQuestion';
    this.clearAnswers();
    if (translateDirection === this.RUSSIAN) {
      this.setDataForRussianType(val);
    } else if (translateDirection === this.HEBREW) {
      this.setDataForHebrewType(val);
    } else {
      this.setDataForTranscriptionType(val);
    }
    this.setDataForWords(val, translateDirection);
  }

  setDataForRussianType(val) {
    this.questionTextDirectionClass = this.LEFT_DIRECTION_CLASS;
    this.question = val.russian;

    this.firstAnswerCaption = this.HEBREW;
    this.firstAnswerTextDirectionClass = this.RIGHT_DIRECTION_CLASS;
    this.firstAnswer = val.hebrew;

    this.secondAnswerCaption = this.TRANSCRIPTION;
    this.secondAnswerTextDirectionClass = this.LEFT_DIRECTION_CLASS;
    this.secondAnswer = val.voice;
  }

  setDataForHebrewType(val) {
    this.questionTextDirectionClass = this.RIGHT_DIRECTION_CLASS;
    this.question = val.hebrew;

    this.firstAnswerCaption = this.RUSSIAN;
    this.firstAnswerTextDirectionClass = this.LEFT_DIRECTION_CLASS;
    this.firstAnswer = val.russian;

    this.secondAnswerCaption = this.TRANSCRIPTION;
    this.secondAnswerTextDirectionClass = this.LEFT_DIRECTION_CLASS;
    this.secondAnswer = val.voice;
  }

  setDataForTranscriptionType(val) {
    this.questionTextDirectionClass = this.LEFT_DIRECTION_CLASS;
    this.question = val.voice;

    this.firstAnswerCaption = this.HEBREW;
    this.firstAnswerTextDirectionClass = this.RIGHT_DIRECTION_CLASS;
    this.firstAnswer = val.hebrew;

    this.secondAnswerCaption = this.RUSSIAN;
    this.secondAnswerTextDirectionClass = this.LEFT_DIRECTION_CLASS;
    this.secondAnswer = val.russian;
  }

  getTranslateDirectionForLanguageUnit(translateDirection) {
    if (translateDirection === this.TRANSCRIPTION) {
      return this.TRANSCRIPTION_FOR_LANGUAGE_UNIT;
    } else {
      return translateDirection;
    }
  }

  setDataForWords(val, translateDirection) {
    this.wordButtons = val.wordsIdentification;
    this.currentTranslateDirection = this.getTranslateDirectionForLanguageUnit(translateDirection);
  }

  changeAnswersVisibility(section) {
    this.answersVisibility[section] = !this.answersVisibility[section];
  }

  clearAnswersVisibility() {
    this.answersVisibility.answerFirstVisibility = false;
    this.answersVisibility.answerSecondVisibility = false;
    this.answersVisibility.wordsVisibility = false;
  }

  clearAnswers() {
    this.clearAnswersVisibility();
    this.firstAnswer = '';
    this.secondAnswer = '';
    this.wordButtons = [];
  }
}
