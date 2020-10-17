import { AnswerInterface } from "../../interfaces";
import QuestionInterface, {
  QuestionType,
  QuestionAnswers,
} from "../../interfaces/Question.interface";

type Props<T extends AnswerInterface> = {
  text: string;
  answers: QuestionAnswers<T>;
  board?: string;
};
export default class QuestionTemplate<
  T extends AnswerInterface
> extends QuestionInterface<T> {
  readonly type = QuestionType.TemplateA;
  readonly text: string;
  readonly board?: string;
  readonly answers: QuestionAnswers<T>;

  constructor({ text, answers, board }: Props<T>) {
    super();
    this.text = text;
    this.board = board;
    this.answers = answers;
  }
}
