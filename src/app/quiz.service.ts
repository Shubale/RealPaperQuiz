import { Injectable } from '@angular/core';
import { Quiz } from "./quiz.model";
import {Question} from "./question.model";

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  questionSets: Question[][]=[
    [
      new Question(
        "Which country's capital is Riga?",
        "a",
        ["Estonia", "Poland", "France", "Bulgaria"]
      ),
      new Question(
        "How many neighbours does France have?",
        "d",
        ["7","8","9","10"]
      )
    ],
    [
      new Question(
        "Who died in 1444 in the battle of Varna?",
        "c",
        ["Sultan Mahiid II", "King Louis XVII", "King Władysław III", "Emperor Zhu Qiyu"]
      )
    ]
  ]
  quizzes: Quiz[] = [
    new Quiz(
      'Countries of Europe',
      'Arek',
      this.questionSets[0]
    ),
    new Quiz(
      'History vol. 3',
      'Bartek',
      this.questionSets[1]
    )
  ];
  actualQuiz: Quiz = this.quizzes[0];
  actualQuestion: number = 0;
  addQuiz(quiz: Quiz){
    this.quizzes.push(quiz);
    console.log(this.quizzes);
  }
  constructor() { }
}
