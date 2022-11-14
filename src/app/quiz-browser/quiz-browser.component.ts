import { Component, OnInit } from '@angular/core';
import { Quiz } from '../quiz.model';
import {Question} from "../question.model";
@Component({
  selector: 'app-quiz-browser',
  templateUrl: './quiz-browser.component.html',
  styleUrls: ['./quiz-browser.component.scss']
})
export class QuizBrowserComponent implements OnInit {
  questionSets: Question[]=[
    new Question(
      "Which country's capital is Riga?",
      "a",
      ["Estonia, Poland, France, Bulgaria"]
    ),
    new Question(
      "Who died in 1444 in the battle of Varna?",
      "c",
      ["Sultan Mahiid II", "King Louis XVII", "King Władysław III", "Emperor Zhu Qiyu"]
    )
  ]
  quizzes: Quiz[] = [
    new Quiz(
      'Countries of Europe',
      'Arek',
      [this.questionSets[0]]
    ),
    new Quiz(
      'History vol. 3',
      'Bartek',
      [this.questionSets[1]]
    )
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
