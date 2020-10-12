export interface AnswerInterface {
  id: number;
}

export interface TextAnswerInterface extends AnswerInterface {
  label: string;
  text: string;
}

export interface ImageAnswerInterface extends AnswerInterface {
  image: string;
}
