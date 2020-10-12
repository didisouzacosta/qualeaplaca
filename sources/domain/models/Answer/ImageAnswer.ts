import { ImageAnswerType } from "../../Types";

export default class ImageAnswer implements ImageAnswerType {
  constructor(readonly id: number, readonly image: string) {}
}
