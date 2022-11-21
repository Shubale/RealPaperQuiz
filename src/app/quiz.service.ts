import { Injectable } from '@angular/core';
import { Quiz } from "./quiz.model";

@Injectable({
  providedIn: 'root'
})
export class FormService {
  quizzes: Quiz[] = [];
  addQuiz(quiz: Quiz){
    this.quizzes.push(quiz);
    console.log(this.quizzes);
  }
  constructor() { }
}
