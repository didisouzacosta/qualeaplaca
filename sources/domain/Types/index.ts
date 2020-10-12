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

export type AnswerType = {
  id: number;
  label: string;
  text: string;
  image: string;
};

export type TextAnswerType = Pick<AnswerType, "id" | "label" | "text">;
export type ImageAnswerType = Pick<AnswerType, "id" | "image">;
