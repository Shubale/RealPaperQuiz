import { Component, OnInit } from '@angular/core';
import { Quiz } from '../quiz.model';
import {Question} from "../question.model";
import {QuizService} from "../quiz.service";
@Component({
  selector: 'app-quiz-browser',
  templateUrl: './quiz-browser.component.html',
  styleUrls: ['./quiz-browser.component.scss'],
})
export class QuizBrowserComponent implements OnInit {

  constructor(private formService: QuizService) {
  }
  ngOnInit(): void {
  }
  getQuizzes(){
    console.log(this.formService.quizzes);
    return this.formService.quizzes;
  }
  getAnswers(){
    //return this.formService.quizzes.questions
  }
}
