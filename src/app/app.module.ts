import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HeaderComponent} from "./Header/header.component";
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { QuizBrowserComponent } from './quiz-browser/quiz-browser.component';
import { QuizShowerComponent } from './quiz-browser/quiz-shower/quiz-shower.component';
import { FileComponent } from './Upload/file/file.component';
import { FormComponent } from './Upload/form/form.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeScreenComponent,
    NavBarComponent,
    QuizBrowserComponent,
    QuizShowerComponent,
    FileComponent,
    FormComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
