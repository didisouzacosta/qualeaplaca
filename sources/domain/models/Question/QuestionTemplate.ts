import QuestionInterface, {
  QuestionType,
  QuestionAnswers,
} from "../../interfaces/Question.interface";

type Props<T> = {
  text: string;
  answers: QuestionAnswers<T>;
  board?: string;
  selectedAnswer?: number;
};
export default class QuestionTemplate<T> extends QuestionInterface<T> {
  public selectedAnswer?: number;
  public type = QuestionType.TemplateA;

  readonly text: string;
  readonly board?: string;
  readonly answers: QuestionAnswers<T>;

  constructor({ text, answers, board, selectedAnswer }: Props<T>) {
    super();
    this.text = text;
    this.board = board;
    this.answers = answers;
    this.selectedAnswer = selectedAnswer;
  }
}
