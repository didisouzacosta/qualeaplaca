import { QuestionType } from "../../interfaces/Question.interface";
import { TextAnswer } from "../Answer";
import QuestionTemplate from "./QuestionTemplate";

export default class QuestionTemplateB extends QuestionTemplate<TextAnswer> {
  readonly type = QuestionType.TemplateB;
}
