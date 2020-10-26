import { AnswerInterface } from "../../interfaces";
import QuestionInterface, {
  QuestionType,
  QuestionAnswers,
} from "../../interfaces/Question.interface";

type Props<T extends AnswerInterface> = {
  id: number;
  text: string;
  answers: QuestionAnswers<T>;
  board?: string;
};
export default class QuestionTemplate<
  T extends AnswerInterface
> extends QuestionInterface<T> {
  public answers: QuestionAnswers<T>;

  readonly id: number;
  readonly type: QuestionType;
  readonly text: string;
  readonly board?: string;

  constructor({ id, text, answers, board }: Props<T>) {
    super();
    this.id = id;
    this.type = QuestionType.TemplateA;
    this.text = text;
    this.board = board;
    this.answers = answers;
  }
}
