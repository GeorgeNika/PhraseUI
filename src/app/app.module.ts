import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DataService } from './services/data.service';
import { PhraseComponent } from './phrase/phrase.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { WordButtonComponent } from './word-button/word-button.component';
import { AppRoutingModule } from './app-routing.module';
import { WordComponent } from './word/word.component';

@NgModule({
  declarations: [
    AppComponent,
    PhraseComponent,
    AuthenticationComponent,
    WordButtonComponent,
    WordComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
