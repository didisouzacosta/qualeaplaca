import React from "react";
import {
  AnswerInterface,
  QuestionAnswers,
} from "../../../../../../../domain/interfaces";

import { AnswerButton } from "./../../../../components/Button";
import { Container, Space } from "./styles";

type Props = {
  answers: QuestionAnswers<AnswerInterface>;
  displayCorrectAnswer: boolean;
};

const TemplateA = ({ answers, displayCorrectAnswer }: Props) => {
  return (
    <Container>
      <AnswerButton
        answer={answers.first}
        displayCorrectAnswer={displayCorrectAnswer}
        onPress={(answer) => {}}
      />
      <Space />
      <AnswerButton
        answer={answers.second}
        displayCorrectAnswer={displayCorrectAnswer}
        onPress={(answer) => {}}
      />
      <Space />
      <AnswerButton
        answer={answers.third}
        displayCorrectAnswer={displayCorrectAnswer}
        onPress={(answer) => {}}
      />
      <Space />
      <AnswerButton
        answer={answers.fourth}
        displayCorrectAnswer={displayCorrectAnswer}
        onPress={(answer) => {}}
      />
    </Container>
  );
};

export default TemplateA;
