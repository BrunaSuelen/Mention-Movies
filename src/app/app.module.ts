import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MentionModule } from 'angular-mentions';

import { AppComponent } from './app.component';
import { MentionComponent } from './mention/mention.component';

@NgModule({
  declarations: [
    AppComponent,
    MentionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MentionModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
