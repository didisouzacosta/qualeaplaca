import AnswerInterface from "./Answer.interface";

abstract class QuestionInterface<T extends AnswerInterface> {
  abstract id: number;
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

  selectAnswer(answer: T) {
    const { first, second, third, fourth } = this.answers;

    first.isSelected = false;
    second.isSelected = false;
    third.isSelected = false;
    fourth.isSelected = false;

    if (first.id === answer.id) {
      first.isSelected = true;
    } else if (second.id === answer.id) {
      second.isSelected = true;
    } else if (third.id === answer.id) {
      third.isSelected = true;
    } else if (fourth.id === answer.id) {
      fourth.isSelected = true;
    }
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
    public first: T,
    public second: T,
    public third: T,
    public fourth: T
  ) {}
}

export default QuestionInterface;
