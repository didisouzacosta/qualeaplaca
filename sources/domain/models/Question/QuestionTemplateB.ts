import QuestionInterface, {
  Answers,
} from "../../interfaces/Question.interface";
import { ImageAnswer } from "../Answer/ImageAnswer";

class QuestionTemplateB extends QuestionInterface<ImageAnswer> {
  constructor(
    readonly text: string,
    readonly board: string,
    readonly answers: Answers<ImageAnswer>,
    readonly selectedAnswer: number
  ) {
    super();
  }
}

export default QuestionTemplateB;
