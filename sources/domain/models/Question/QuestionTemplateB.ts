import { QuestionType } from "../../interfaces";
import { TextAnswer } from "../Answer";
import QuestionTemplate from "./QuestionTemplate";

export default class QuestionTemplateB extends QuestionTemplate<TextAnswer> {
  readonly type = QuestionType.TemplateB;
}
