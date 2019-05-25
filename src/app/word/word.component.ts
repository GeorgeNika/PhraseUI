import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['../app.component.css', './word.component.css']
})
export class WordComponent implements OnInit {

  wordType = '';
  wordId = '';
  dataFromApi: any;

  constructor(private readonly route: ActivatedRoute,
              private readonly router: Router,
              private dataService: DataService) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.wordType = params.get('wordType');
      this.wordId = params.get('wordId');
      this.getWordInformation(this.wordType, this.wordId);
    });

  }

  getWordInformation(wordType: string, wordId: string) {
    this.dataService.getWordInformation(wordType, wordId).subscribe( val => {
      this.setWordInformation(val);
    });
  }

  setWordInformation(val) {
    this.dataFromApi = val;
  }

}
