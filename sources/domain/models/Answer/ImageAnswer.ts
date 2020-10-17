import { AnswerInterface } from "../../interfaces";

export default class ImageAnswer implements AnswerInterface {
  readonly id: number;
  readonly image?: string;
  readonly isRightAnswer?: boolean;
  readonly isSelected?: boolean;

  constructor({ id, image, isRightAnswer, isSelected }: AnswerInterface) {
    this.id = id;
    this.image = image;
    this.isRightAnswer = isRightAnswer;
    this.isSelected = isSelected;
  }
}
