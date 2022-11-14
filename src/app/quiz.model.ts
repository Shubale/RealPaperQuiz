import {Question} from "./question.model";

export class Quiz {
  public name: string;
  public author: string;
  public questions: Question[];

  constructor(name: string, author: string, questions: Question[]){
    this.name = name;
    this.author = author;
    this.questions = questions;
  }
}
