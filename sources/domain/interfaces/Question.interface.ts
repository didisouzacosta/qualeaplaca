import { AnswerInterface } from "./Answer.interface";

abstract class QuestionInterface<T extends AnswerInterface> {
  abstract text: string;
  abstract board?: string;
  abstract type: Question.Type;
  abstract answers: Question.Answers<T>;
  abstract selectedAnswer: number;

  isCorrect(): boolean {
    return this.answers.rightAnswer === this.selectedAnswer;
  }
}

export namespace Question {
  export enum Type {
    TemplateA = 1,
    TemplateB,
    TemplateC,
  }

  export class Answers<T extends AnswerInterface> {
    constructor(
      readonly first: T,
      readonly second: T,
      readonly third: T,
      readonly fourth: T,
      public rightAnswer: number
    ) {}
  }
}

export default QuestionInterface;
