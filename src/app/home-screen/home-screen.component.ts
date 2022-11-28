import { Component, OnInit } from '@angular/core';
import { QuizService } from "../services/quiz.service";


@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss']
})
export class HomeScreenComponent implements OnInit {

  constructor(public quizService: QuizService) { }

  ngOnInit(): void {
  }

  onClick(i: number) {
    this.quizService.selectedAnswer = this.quizService.actualQuestion.answers[i];
    console.log("onclick działa")
  }
}
