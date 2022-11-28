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

  constructor(private formService: QuizService) {
  }

  getQuizzes(){
    console.log(this.formService.quizzes);
    return this.formService.quizzes;
  }

  ngOnInit(): void {
  }

}
