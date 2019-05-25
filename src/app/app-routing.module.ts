import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {PhraseComponent} from './phrase/phrase.component';
import {WordComponent} from './word/word.component';


const routes: Routes = [
  { path: '', component: PhraseComponent },
  { path: 'phrase', redirectTo: '' },
  { path: 'word/:wordType/:wordId', component: WordComponent },
  { path: '**', component: PhraseComponent }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
