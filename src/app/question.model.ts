export class Question {
  question: string;
  correctAnswer: string;
  answers: string[];

  constructor(question: string, correctAnswer: string, answers: string[]) {
    this.question = question;
    this.correctAnswer = correctAnswer;
    this.answers = answers;
  }

  answer(answer: string){
    return answer==this.correctAnswer;
  }


}
