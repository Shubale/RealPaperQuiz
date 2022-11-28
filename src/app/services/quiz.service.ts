import { Injectable } from '@angular/core';
import { Quiz } from "../models/quiz.model";
import { Question } from "../models/question.model";

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  questionSets: Question[][]=[
    [
      {
        question: "Which country's capital is Riga?",
        correctAnswer: "A",
        answers: ["Latvia", "Poland", "France", "Bulgaria"]
      },{
        question: "How many neighbours does France have?",
        correctAnswer: "D",
        answers: ["7", "8", "9", "10"]
      }
    ],
    [
      {
        question: "Who died in 1444 in the battle of Varna?",
        correctAnswer: "C",
        answers: ["Sultan Mahiid II", "King Louis XVII", "King Władysław III", "Emperor Zhu Qiyu"]
      }
    ]
  ]
  quizzes: Quiz[] = [
    {
      title: 'Countries of Europe',
      author: 'Arek',
      questions: this.questionSets[0]
    },
    {
      title: 'History vol. 3',
      author: 'Bartek',
      questions: this.questionSets[1]
    }
  ];
  actualQuiz: Quiz = this.quizzes[0];
  actualQuizIndex = 0;
  actualQuestion: Question = this.actualQuiz.questions[0];
  actualQuestionIndex = 0;
  selectedAnswer: string;
  numberToAscii(num: number){
    return String.fromCodePoint(num);
  }
  addQuiz(quiz: Quiz){
    this.quizzes.push(quiz);
    console.log(this.quizzes);
  }
}
