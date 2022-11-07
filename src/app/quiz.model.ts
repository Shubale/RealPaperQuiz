export class Quiz {
  public name: string;
  public category: string;
  public description: string;
  public author: string;
  public questionsPath: string;

  constructor(name: string, category: string, description: string, author: string, questionsPath: string){
    this.name = name;
    this.category = category;
    this.description = description;
    this.author = author;
    this.questionsPath = questionsPath;
  }
}
