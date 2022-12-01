import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, FormRecord, Validators} from "@angular/forms";
import { QuizService } from "../../services/quiz.service";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  constructor(private formService: QuizService, private cd:ChangeDetectorRef) { }
  quizForm: FormGroup;
  ngOnInit() {
    this.quizForm = new FormRecord({
      'title': new FormControl('title', Validators.required),
      'author' : new FormControl('author', Validators.required),
      'questions' : new FormArray([
            new FormRecord({
            'question' : new FormControl('Question 1', Validators.required),
            'correctAnswer' : new FormControl('Choose correct answer', Validators.required),
            'answers' : new FormArray([
              new FormControl(null, Validators.required),
              new FormControl(null, Validators.required),
              new FormControl(null, Validators.required),
              new FormControl(null, Validators.required)
            ])
          })
      ]),
    });
    console.log(this.quizForm.controls.questions.value);
  }
  //
  identify(index, item){
   return item.id;
  }
  trackElement(index: any, item: any){
    return item.id;
  }
  trackByFn(index, item){
    return index;
  };
  onSubmit(){
    this.formService.addQuiz({
      id: this.formService.generateId(),
      title: this.quizForm.value.title,
      author: this.quizForm.value.author,
      questions: this.quizForm.value.questions
    });
    console.log(this.quizForm);
    console.log(this.formService.quizzes);
    console.log(this.quizForm.get('questions')['question'])
  }

  onAddQuestion(){
    const control = new FormRecord({
        'question' : new FormControl(null, Validators.required),
        'correctAnswer' : new FormControl('Choose correct answer', Validators.required),
        'answers' : new FormArray([
          new FormControl(null, Validators.required),
          new FormControl(null, Validators.required),
          new FormControl(null, Validators.required),
          new FormControl(null, Validators.required)
        ])
      });
    (<FormArray>this.quizForm.get('questions')).push(control);
  }

  onDeleteQuestionAtPos(pos: number, quetion:any){
    console.log('q',quetion)
    if(this.quizForm.get('questions').value.length>1) {
      //const temp = this.quizForm.controls.questions.value.filter((o,i)=>i!=pos);
      //this.quizForm.controls.questions.setValue(temp);
       (<FormArray>this.quizForm.get('questions')).removeAt((pos));
    }
    console.log(this.quizForm.controls.questions.value);
    this.cd.markForCheck();
  }

}
