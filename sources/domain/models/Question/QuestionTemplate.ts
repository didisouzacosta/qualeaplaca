import { AnswerInterface } from "../../interfaces/Answer.interface";
import QuestionInterface, {
  Question,
} from "../../interfaces/Question.interface";

export default class QuestionTemplate<
  T extends AnswerInterface
> extends QuestionInterface<T> {
  type = Question.Type.TemplateA;

  constructor(
    readonly text: string,
    readonly board: string | undefined,
    readonly answers: Question.Answers<T>,
    public selectedAnswer: number
  ) {
    super();
  }
}
