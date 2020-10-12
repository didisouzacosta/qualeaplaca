import { AnswerInterface } from "../../interfaces";

export default class ImageAnswer implements AnswerInterface {
  readonly id: number;
  readonly image?: string;

  constructor({ id, image }: AnswerInterface) {
    this.id = id;
    this.image = image;
  }
}
