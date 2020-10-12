import { AnswerInterface } from "./Answer.interface";

abstract class QuestionInterface<T extends AnswerInterface> {
  abstract text: string;
  abstract board: string;
  abstract answers: Answers<T>;
  abstract selectedAnswer: number;

  isCorrect(): boolean {
    return this.answers.rightAnswer === this.selectedAnswer;
  }
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

export default QuestionInterface;
