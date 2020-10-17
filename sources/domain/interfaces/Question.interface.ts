import AnswerInterface from "./Answer.interface";

abstract class QuestionInterface<T extends AnswerInterface> {
  abstract text: string;
  abstract board?: string;
  abstract type: QuestionType;
  abstract answers: QuestionAnswers<T>;

  rightAnswer(): T {
    return this.answersArr().find((answer) => answer.isRightAnswer)!;
  }

  selectedAnswer(): T | undefined {
    return this.answersArr().find((answer) => answer.isSelected);
  }

  isCorrect(): boolean {
    return this.rightAnswer === this.selectedAnswer;
  }

  private answersArr(): T[] {
    const { first, second, third, fourth } = this.answers;
    return [first, second, third, fourth];
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
