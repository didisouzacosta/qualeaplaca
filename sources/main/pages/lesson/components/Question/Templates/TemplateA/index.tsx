import React from "react";

import { AnswerButton } from "./../../../../components/Button";

import { Container } from "./styles";

const TemplateA = () => {
  return (
    <Container>
      <AnswerButton label="a)" title="45 horas" />
      <AnswerButton label="b)" title="35 horas" />
      <AnswerButton label="c)" title="44 horas" selected={true} />
      <AnswerButton label="d)" title="24 horas" />
    </Container>
  );
};

export default TemplateA;
