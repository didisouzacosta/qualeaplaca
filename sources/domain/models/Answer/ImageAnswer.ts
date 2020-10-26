import { AnswerInterface } from "../../interfaces";

export default class ImageAnswer implements AnswerInterface {
  public isSelected?: boolean;

  readonly id: number;
  readonly image?: string;
  readonly isRightAnswer?: boolean;

  constructor({ id, image, isRightAnswer, isSelected }: AnswerInterface) {
    this.id = id;
    this.image = image;
    this.isRightAnswer = isRightAnswer;
    this.isSelected = isSelected;
  }
}
