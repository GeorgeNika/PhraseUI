import { Component } from '@angular/core';
import {DataService} from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PhraseUI';
  phrase = 'new phrase';

  constructor(private dataService: DataService) {}

  getNewPhrase = function() {
    this.dataService.getNewString().subscribe( val => {
      console.log(val);
      this.phrase = val;
      });
  };
}
