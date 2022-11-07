import { Component, OnInit } from '@angular/core';
import { Quiz } from '../quiz.model';
@Component({
  selector: 'app-quiz-browser',
  templateUrl: './quiz-browser.component.html',
  styleUrls: ['./quiz-browser.component.scss']
})
export class QuizBrowserComponent implements OnInit {
  quizzes: Quiz[] = [
    new Quiz(
      'Countries of Europe',
      'Geography',
      'Quiz about countries in Europe',
      'Arek',
      './quizzes'
    ),
    new Quiz(
      'Anatomy of economy',
      'Economy',
      'Test your knowledge of various economic terms',
      'Arek',
      './quizzes'
    )
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
