import { Question } from "../../interfaces/Question.interface";
import { ImageAnswer } from "../Answer";
import QuestionTemplate from "./QuestionTemplate";

export default class QuestionTemplateC extends QuestionTemplate<ImageAnswer> {
  readonly type = Question.Type.TemplateC;
}
