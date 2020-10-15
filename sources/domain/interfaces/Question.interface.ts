import AnswerInterface from "./Answer.interface";

abstract class QuestionInterface<T extends AnswerInterface> {
  abstract text: string;
  abstract board?: string;
  abstract type: QuestionType;
  abstract answers: QuestionAnswers<T>;
  abstract selectedAnswer?: T;

  isCorrect(): boolean {
    return this.selectedAnswer?.isRightAnswer ?? false;
  }

  canDisplayCorrectAnswer(): boolean {
    return this.selectedAnswer != (undefined || null);
  }

  disabled(): boolean {
    return this.canDisplayCorrectAnswer();
  }
}

export enum QuestionType {
  TemplateA = 1,
  TemplateB,
  TemplateC,
}

export class QuestionAnswers<T extends AnswerInterface> {
  constructor(
    readonly first: T,
    readonly second: T,
    readonly third: T,
    readonly fourth: T
  ) {}
}

export default QuestionInterface;
