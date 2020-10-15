import { AnswerInterface } from "../../interfaces";

export default class TextAnswer implements AnswerInterface {
  readonly id: number;
  readonly label?: string;
  readonly text?: string;
  readonly isRightAnswer?: boolean;

  constructor({ id, label, text, isRightAnswer }: AnswerInterface) {
    this.id = id;
    this.label = label;
    this.text = text;
    this.isRightAnswer = isRightAnswer;
  }
}
