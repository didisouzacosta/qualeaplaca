import { AnswerInterface } from "../../interfaces";

export default class ImageAnswer implements AnswerInterface {
  readonly id: number;
  readonly image?: string;
  readonly isRightAnswer?: boolean;

  constructor({ id, image, isRightAnswer }: AnswerInterface) {
    this.id = id;
    this.image = image;
    this.isRightAnswer = isRightAnswer;
  }
}
