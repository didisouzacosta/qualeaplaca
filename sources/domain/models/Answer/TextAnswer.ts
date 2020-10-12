import { TextAnswerInterface } from "../../Types";

export default class TextAnswer implements TextAnswerInterface {
  readonly id: number;
  readonly label: string;
  readonly text: string;

  constructor({ id, label, text }: TextAnswerInterface) {
    this.id = id;
    this.label = label;
    this.text = text;
  }
}
