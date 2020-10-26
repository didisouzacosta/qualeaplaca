import { AnswerInterface } from "../../interfaces";

export default class TextAnswer implements AnswerInterface {
  public isSelected?: boolean;

  readonly id: number;
  readonly label?: string;
  readonly text?: string;
  readonly isRightAnswer?: boolean;

  constructor({ id, label, text, isRightAnswer, isSelected }: AnswerInterface) {
    this.id = id;
    this.label = label;
    this.text = text;
    this.isRightAnswer = isRightAnswer;
    this.isSelected = isSelected;
  }
}
