import {Question} from "./question.model";

export interface Quiz {
  id?: number;
  title: string;
  author: string;
  questions: Question[];
}
