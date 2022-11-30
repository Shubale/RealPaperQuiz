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
  playQuiz(){
    this.quizService.actualQuiz = this.quiz;
    this.quizService.actualQuizIndex = this.quizIndex;
    this.quizService.actualQuestion = this.quiz.questions[0];
    this.quizService.actualQuestionIndex = 0;
    console.log(this.quizService.actualQuiz);
  }

  deleteQuiz() {
    this.quizService.delete(this.quiz);
    this.quizService.actualQuiz = null;
    this.quizService.actualQuizIndex = null;
    this.quizService.actualQuestion = null;
    this.quizService.actualQuestionIndex = null;
  }


  editQuiz() {

  }
}
