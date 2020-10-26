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
  onSelectAnswer(answer: T): void;
};

const TemplateA = <T extends AnswerInterface>({
  answers,
  displayCorrectAnswer,
  onSelectAnswer,
}: Props<T>) => {
  return (
    <Container>
      <AnswerButton
        answer={answers.first}
        displayCorrectAnswer={displayCorrectAnswer}
        onPress={onSelectAnswer}
      />
      <Space />
      <AnswerButton
        answer={answers.second}
        displayCorrectAnswer={displayCorrectAnswer}
        onPress={onSelectAnswer}
      />
      <Space />
      <AnswerButton
        answer={answers.third}
        displayCorrectAnswer={displayCorrectAnswer}
        onPress={onSelectAnswer}
      />
      <Space />
      <AnswerButton
        answer={answers.fourth}
        displayCorrectAnswer={displayCorrectAnswer}
        onPress={onSelectAnswer}
      />
    </Container>
  );
};

export default TemplateA;
