import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {QuizService} from "../../services/quiz.service";
import {Quiz} from "../../models/quiz.model";
import {Question} from "../../models/question.model";

@Component({
  selector: 'app-quiz-edit',
  templateUrl: './quiz-edit.component.html',
  styleUrls: ['./quiz-edit.component.scss']
})
export class QuizEditComponent {
  quiz: Quiz;
  quizId: number;
  title: string;
  author: string;
  identify(index, item){
    return item.answers;
  }
  public constructor(private activatedRoute: ActivatedRoute, public quizService: QuizService){
    this.quizId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.quiz = this.quizService.quizzes.find(x=>x.id==this.quizId);
    this.author = this.quiz.author;
  }

  onSubmit() {
    console.log(this.quiz.author);
  }

  deleteQuestion(question: Question) {
    this.quiz.questions.forEach((item, index)=>{
      if(item == question) {
        this.quiz.questions.splice(index, 1);
        console.log(question);
      }
    })
  }

  addQuestion() {
    this.quiz.questions.push({
      question:  '',
      correctAnswer: '',
      answers: [] = ['','','','']
  })
  }
}
