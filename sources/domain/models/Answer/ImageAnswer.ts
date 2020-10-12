import { ImageAnswerInterface } from "../../interfaces/Answer.interface";

export class ImageAnswer implements ImageAnswerInterface {
  constructor(readonly id: number, readonly image: string) {}
}
