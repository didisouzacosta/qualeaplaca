import { TextAnswerType } from "../../Types";

export class TextAnswer implements TextAnswerType {
  constructor(
    readonly id: number,
    readonly label: string,
    readonly text: string
  ) {}
}
