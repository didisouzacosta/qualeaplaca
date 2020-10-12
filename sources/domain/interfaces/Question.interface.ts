import { AnswerType } from "../Types";

abstract class QuestionInterface<T> {
  abstract text: string;
  abstract board?: string;
  abstract type: QuestionType;
  abstract answers: QuestionAnswers<T>;
  abstract selectedAnswer?: number;

  isCorrect(): boolean {
    return this.answers.rightAnswer === this.selectedAnswer;
  }
}

export enum QuestionType {
  TemplateA = 1,
  TemplateB,
  TemplateC,
}

export class QuestionAnswers<T> {
  constructor(
    readonly first: T,
    readonly second: T,
    readonly third: T,
    readonly fourth: T,
    public rightAnswer: number
  ) {}
}

export default QuestionInterface;
