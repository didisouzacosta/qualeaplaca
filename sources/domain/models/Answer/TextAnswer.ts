import { TextAnswerInterface } from "../../interfaces/Answer.interface";

export class TextAnswer implements TextAnswerInterface {
  constructor(
    readonly id: number,
    readonly label?: string,
    readonly text?: string
  ) {}
}
