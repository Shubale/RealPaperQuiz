import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  constructor() { }
  quizForm: FormGroup;

  ngOnInit() {
    this.quizForm = new FormGroup({
      'title': new FormControl(null, Validators.required),
      'author' : new FormControl(null, [Validators.required, Validators.email]),
      'questions' : new FormArray([new FormControl()])
    });
  }
  //
  onSubmit(){
    console.log((this.quizForm.get('questions')).value.length);
  }

  onAddQuiz(){
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.quizForm.get('questions')).push(control);
  }

  onDeleteQuestionAtPos(pos: number){

    if(this.quizForm.get('questions').value.length>1) {
      (<FormArray>this.quizForm.get('questions')).removeAt((pos));
    }
  }

}
