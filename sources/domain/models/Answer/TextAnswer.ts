import { AnswerInterface } from "../../interfaces";

export default class TextAnswer implements AnswerInterface {
  readonly id: number;
  readonly label?: string;
  readonly text?: string;

  constructor({ id, label, text }: AnswerInterface) {
    this.id = id;
    this.label = label;
    this.text = text;
  }
}
