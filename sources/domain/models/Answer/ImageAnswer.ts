import { ImageAnswerInterface } from "../../interfaces/Answer.interface";

export default class ImageAnswer implements ImageAnswerInterface {
  constructor(readonly id: number, readonly image: string) {}
}
