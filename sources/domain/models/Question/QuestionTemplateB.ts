import QuestionInterface, {
  Question,
} from "../../interfaces/Question.interface";
import { ImageAnswer } from "../Answer/ImageAnswer";

class QuestionTemplateB extends QuestionInterface<ImageAnswer> {
  readonly type = Question.Type.TemplateB;

  constructor(
    readonly text: string,
    readonly board: string,
    readonly answers: Question.Answers<ImageAnswer>,
    readonly selectedAnswer: number
  ) {
    super();
  }
}

export default QuestionTemplateB;
