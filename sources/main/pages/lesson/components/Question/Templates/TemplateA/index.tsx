import React from "react";
import { TextAnswerInterface } from "../../../../../../../domain/interfaces/Answer.interface";
import { QuestionAnswers } from "../../../../../../../domain/interfaces/Question.interface";

import { AnswerButton } from "./../../../../components/Button";

import { Container, Space } from "./styles";

type Props<T extends TextAnswerInterface> = {
  answers: QuestionAnswers<T>;
};

const TemplateA = () => {
  return (
    <Container>
      <AnswerButton label="" title="" />
      <Space />
      <AnswerButton label="b)" title="35 horas" />
      <Space />
      <AnswerButton label="c)" title="44 horas" />
      <Space />
      <AnswerButton label="d)" title="24 horas" />
    </Container>
  );
};

export default TemplateA;
