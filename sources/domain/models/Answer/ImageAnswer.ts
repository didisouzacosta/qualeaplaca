import { ImageAnswerInterface, ImageAnswerType } from "../../Types";

export default class ImageAnswer implements ImageAnswerInterface {
  readonly id: number;
  readonly image: string;

  constructor({ id, image }: ImageAnswerInterface) {
    this.id = id;
    this.image = image;
  }
}
