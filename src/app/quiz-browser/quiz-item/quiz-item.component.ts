import {Component, Input, OnInit} from '@angular/core';
import { QuizService } from "../../services/quiz.service";
import {Quiz} from "../../models/quiz.model";

@Component({
  selector: 'app-quiz-item',
  templateUrl: './quiz-item.component.html',
  styleUrls: ['./quiz-item.component.scss']
})
export class QuizItemComponent implements OnInit {

  @Input()
  quiz: Quiz;

  constructor(public quizService: QuizService) {
  }

  getQuizzes(){
    console.log(this.quizService.quizzes);
    return this.quizService.quizzes;
  }

  ngOnInit(): void {
  }

}
