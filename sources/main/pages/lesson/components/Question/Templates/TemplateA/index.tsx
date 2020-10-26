import React from "react";
import {
  AnswerInterface,
  QuestionAnswers,
} from "../../../../../../../domain/interfaces";

import { AnswerButton } from "./../../../../components/Button";
import { Container, Space } from "./styles";

type Props<T extends AnswerInterface> = {
  answers: QuestionAnswers<T>;
  displayCorrectAnswer: boolean;
  selectAnswer(answer: T): void;
};

const TemplateA = <T extends AnswerInterface>({
  answers,
  displayCorrectAnswer,
  selectAnswer,
}: Props<T>) => {
  return (
    <Container>
      <AnswerButton
        answer={answers.first}
        displayCorrectAnswer={displayCorrectAnswer}
        onPress={selectAnswer}
      />
      <Space />
      <AnswerButton
        answer={answers.second}
        displayCorrectAnswer={displayCorrectAnswer}
        onPress={selectAnswer}
      />
      <Space />
      <AnswerButton
        answer={answers.third}
        displayCorrectAnswer={displayCorrectAnswer}
        onPress={selectAnswer}
      />
      <Space />
      <AnswerButton
        answer={answers.fourth}
        displayCorrectAnswer={displayCorrectAnswer}
        onPress={selectAnswer}
      />
    </Container>
  );
};

export default TemplateA;
