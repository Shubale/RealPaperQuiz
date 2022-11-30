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
      id: 0,
      title: 'Countries of Europe',
      author: 'Arek',
      questions: this.questionSets[0]
    },
    {
      id: 1,
      title: 'History vol. 3',
      author: 'Bartek',
      questions: this.questionSets[1]
    }
  ];
  actualQuiz: Quiz;
  actualQuizIndex: number;
  actualQuestion: Question;
  actualQuestionIndex: number;
  selectedAnswer: string;
  quizzesCreated: number = 2;
  numberToAscii(num: number){
    return String.fromCodePoint(num);
  }
  addQuiz(quiz: Quiz){
    this.quizzesCreated++;
    this.quizzes.push(quiz);
    console.log(this.quizzes);
  }

  delete(element: Quiz) {
    this.quizzes.forEach((value, index)=>{
      if(value==element) this.quizzes.splice(index, 1);
    });
  }

  generateId() {
    return this.quizzesCreated;
  }
}
