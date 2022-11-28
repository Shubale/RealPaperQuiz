import { Component, OnInit } from '@angular/core';
import { QuizService } from "../services/quiz.service";


@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss']
})
export class HomeScreenComponent implements OnInit {

  correctAnswers:number = 0;
  quizDone: boolean = false;
  constructor(public quizService: QuizService) { }

  ngOnInit(): void {
  }

  onClick(i: number) {
    this.quizService.selectedAnswer = String.fromCodePoint(i+65);
  }

  submitAnswer() {
    if(this.quizService.selectedAnswer==null){
      return;
    }
    if(this.quizService.selectedAnswer==this.quizService.actualQuestion.correctAnswer){
      this.correctAnswers++;
    }
    this.quizService.selectedAnswer = null;
    if(this.quizService.actualQuestionIndex != this.quizService.actualQuiz.questions.length-1) {
      this.quizService.actualQuestionIndex++;
      this.quizService.actualQuestion = this.quizService.actualQuiz.questions[this.quizService.actualQuestionIndex];
    } else {
      this.quizDone = true;
    }
  }
}
