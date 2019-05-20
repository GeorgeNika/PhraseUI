import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {PhraseComponent} from './phrase/phrase.component'


const routes: Routes = [
  { path: '', component: PhraseComponent },
  { path: 'phrase', redirectTo: '' },
  { path: 'word', component: PhraseComponent },
  // { path: 'item/:id', component: ItemComponent},
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
