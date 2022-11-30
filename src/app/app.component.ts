import {Component, OnInit} from '@angular/core';
import {QuizService} from "./services/quiz.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ QuizService ]
})
export class AppComponent implements OnInit {
  title = 'RealPaperQuiz';

  constructor(private formService: QuizService) {  }

  ngOnInit() {
  }

  funkyFunc(str: string){
    console.log('xd');
    return str==this.title;
  }
}
