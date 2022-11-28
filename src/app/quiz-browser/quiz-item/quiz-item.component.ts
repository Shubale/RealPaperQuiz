import {Component, Input} from '@angular/core';
import { QuizService } from "../../services/quiz.service";
import {Quiz} from "../../models/quiz.model";

@Component({
  selector: 'app-quiz-item',
  templateUrl: './quiz-item.component.html',
  styleUrls: ['./quiz-item.component.scss']
})
export class QuizItemComponent {

  @Input()
  quiz: Quiz;
  @Input()
  quizIndex: number;

  constructor(public quizService: QuizService) {
  }

  getQuizzes(){
    console.log(this.quizService.quizzes);
    return this.quizService.quizzes;
  }
  selectQuiz(i: number){
    this.quizService.actualQuiz = this.quizService.quizzes[i];
    this.quizService.actualQuestion = this.quizService.actualQuiz.questions[0];
    console.log(this.quizService.actualQuiz);
  }
}
