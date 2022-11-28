import { Component } from '@angular/core';
import {QuizService} from "../services/quiz.service";

@Component({
  selector: 'app-quiz-browser',
  templateUrl: './quiz-browser.component.html',
  styleUrls: ['./quiz-browser.component.scss'],
})
export class QuizBrowserComponent{
  constructor(private formService: QuizService) {
  }
  getQuizzes(){
    console.log(this.formService.quizzes);
    return this.formService.quizzes;
  }
}
