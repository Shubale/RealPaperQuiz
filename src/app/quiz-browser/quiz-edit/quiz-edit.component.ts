import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {QuizService} from "../../services/quiz.service";
import {Quiz} from "../../models/quiz.model";

@Component({
  selector: 'app-quiz-edit',
  templateUrl: './quiz-edit.component.html',
  styleUrls: ['./quiz-edit.component.scss']
})
export class QuizEditComponent {
  quiz: Quiz;
  quizId: number;
  public constructor(private activatedRoute: ActivatedRoute, private quizService: QuizService){
    this.quizId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.quiz = this.quizService.quizzes.find(x=>x.id==this.quizId);
  }

  onSubmit() {

  }
}
