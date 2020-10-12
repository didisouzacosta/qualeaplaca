import { AnswerInterface } from "./Answer.interface";

abstract class QuestionInterface<T extends AnswerInterface> {
  abstract text: string;
  abstract board?: string;
  abstract template: Question.Type;
  abstract answers: T[];
  abstract rightAnswer: number;
  abstract selectedAnswer: number;

  isCorrect(): boolean {
    return this.rightAnswer === this.selectedAnswer;
  }
}

export namespace Question {
  export enum Type {
    TemplateA = 1,
    TemplateB,
    TemplateC,
  }
}

export default QuestionInterface;
