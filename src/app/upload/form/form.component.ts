import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import { QuizService } from "../../services/quiz.service";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  constructor(private formService: QuizService) { }
  quizForm: FormGroup;
  ngOnInit() {
    this.quizForm = new FormGroup({
      'title': new FormControl('title', Validators.required),
      'author' : new FormControl('author', Validators.required),
      'questions' : new FormArray([
            new FormGroup({
            'question' : new FormControl('question', Validators.required),
            'correctAnswer' : new FormControl('correctAnswer', Validators.required),
            'answers' : new FormArray([
              new FormControl('answer1', Validators.required),
              new FormControl('answer2', Validators.required),
              new FormControl('answer3', Validators.required),
              new FormControl('answer4', Validators.required)
            ])
          })
      ]),

    });
  }
  //
  onSubmit(){
    this.formService.addQuiz({
      title: this.quizForm.value.title,
      author: this.quizForm.value.author,
      questions: this.quizForm.value.questions
    });
    console.log(this.quizForm);
    console.log(this.formService.quizzes);
  }

  onAddQuestion(){
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.quizForm.get('questions')).push(control);
  }

  onDeleteQuestionAtPos(pos: number){
    if(this.quizForm.get('questions').value.length>1) {
      (<FormArray>this.quizForm.get('questions')).removeAt((pos));
    }
  }

}
