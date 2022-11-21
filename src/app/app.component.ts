import {Component, OnInit} from '@angular/core';
import {QuizService} from "./quiz.service";
import {Quiz} from "./quiz.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ QuizService ]
})
export class AppComponent implements OnInit {
  title = 'RealPaperQuiz';
  quizzes: Quiz[] = [];

  constructor(private formService: QuizService) {  }

  ngOnInit() {
    this.quizzes = this.formService.quizzes;
  }

  funkyFunc(str: string){
    console.log('xd');
    return str==this.title;
  }
}
