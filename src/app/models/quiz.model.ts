import {Question} from "./question.model";

export interface Quiz {
  title: string;
  author: string;
  questions: Question[];
}
