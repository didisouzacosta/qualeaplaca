import React from "react";

import { AnswerButton } from "./../../../../components/Button";

import { Container } from "./styles";

const TemplateA = () => {
  return (
    <Container>
      <AnswerButton label="a)" title="45 horas" isCorrect={true} />
      <AnswerButton label="b)" title="35 horas" />
      <AnswerButton label="c)" title="44 horas" />
      <AnswerButton label="d)" title="20 horas" selected={true} />
      <AnswerButton label="e)" title="24 horas" />
    </Container>
  );
};

export default TemplateA;
