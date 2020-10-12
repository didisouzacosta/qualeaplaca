import React from "react";
import { AnswerInterface } from "../../../../../../../domain/interfaces";
import { QuestionAnswers } from "../../../../../../../domain/interfaces/Question.interface";

import { AnswerButton } from "./../../../../components/Button";
import { Container, Space } from "./styles";

type Props<T extends AnswerInterface> = {
  answers: QuestionAnswers<T>;
};

const TemplateA = <T extends AnswerInterface>({ answers }: Props<T>) => {
  return (
    <Container>
      <AnswerButton
        label={`${answers.first.label} )`}
        title={`${answers.first.text}`}
      />
      <Space />
      <AnswerButton
        label={`${answers.second.label} )`}
        title={`${answers.second.text}`}
      />
      <Space />
      <AnswerButton
        label={`${answers.third.label} )`}
        title={`${answers.third.text}`}
      />
      <Space />
      <AnswerButton
        label={`${answers.fourth.label} )`}
        title={`${answers.fourth.text}`}
      />
    </Container>
  );
};

export default TemplateA;
