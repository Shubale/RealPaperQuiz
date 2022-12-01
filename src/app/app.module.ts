import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import {HeaderComponent} from "./header/header.component";
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { QuizBrowserComponent } from './quiz-browser/quiz-browser.component';
import { FileComponent } from './upload/file/file.component';
import { FormComponent } from './upload/form/form.component';
import { UserComponent } from './user/user.component';
import { UploadComponent } from './upload/upload.component';
import {BasicHighlightDirective} from "./basic-highlight.directive";
import {BetterHighlightDirective} from "./better-highlight.directive";
import { UnlessDirective } from './unless.directive';
import { QuizItemComponent } from './quiz-browser/quiz-item/quiz-item.component';
import { QuizEditComponent } from './quiz-browser/quiz-edit/quiz-edit.component';


const appRoutes: Routes = [
  { path: '', component: HomeScreenComponent },
  { path: 'browse_quizzes', component: QuizBrowserComponent },
  { path: 'your_quizzes', component: QuizBrowserComponent },
  { path: 'upload_quiz', component: UploadComponent },
  { path: 'edit_quiz/:id', component: QuizEditComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeScreenComponent,
    NavBarComponent,
    QuizBrowserComponent,
    FileComponent,
    FormComponent,
    UserComponent,
    UploadComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    QuizItemComponent,
    QuizEditComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
