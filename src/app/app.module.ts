import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MentionComponent } from './component/mention/mention.component';
import { MentionModule } from 'angular-mentions';

@NgModule({
  declarations: [
    AppComponent,
    MentionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MentionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
