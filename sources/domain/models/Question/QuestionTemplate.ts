import { AnswerInterface } from "../../interfaces/Answer.interface";
import QuestionInterface, {
  QuestionType,
  QuestionAnswers,
} from "../../interfaces/Question.interface";

export default class QuestionTemplate<
  T extends AnswerInterface
> extends QuestionInterface<T> {
  type = QuestionType.TemplateA;

  constructor(
    readonly text: string,
    readonly answers: QuestionAnswers<T>,
    readonly board?: string,
    public selectedAnswer?: number
  ) {
    super();
  }
}
