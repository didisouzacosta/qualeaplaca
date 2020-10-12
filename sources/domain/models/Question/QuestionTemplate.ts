import QuestionInterface, {
  QuestionType,
  QuestionAnswers,
} from "../../interfaces/Question.interface";
import { AnswerType } from "../../Types";

export default class QuestionTemplate<
  T extends AnswerType
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
