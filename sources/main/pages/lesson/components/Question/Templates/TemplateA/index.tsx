import React from "react";

import { AnswerButton } from "./../../../../components/Button";

import { Container, Space } from "./styles";

const TemplateA = () => {
  return (
    <Container>
      <AnswerButton label="a)" title="45 horas" />
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
