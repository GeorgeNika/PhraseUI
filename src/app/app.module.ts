import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DataService } from './services/data.service';
import { PhraseComponent } from './phrase/phrase.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { WordIdentificationComponent } from './word-identification/word-identification.component';

@NgModule({
  declarations: [
    AppComponent,
    PhraseComponent,
    AuthenticationComponent,
    WordIdentificationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
