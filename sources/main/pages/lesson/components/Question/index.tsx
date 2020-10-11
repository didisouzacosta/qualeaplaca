import React from "react";

import { ConfirmationButton } from "./../Button";
import { TemplateA, TemplateB } from "./Templates";

import { Container, Text, Answer } from "./styles";

const Question = () => {
  return (
    <Container>
      <Text>
        Qual a carga horária obrigatória no curso teórico-técnico para o
        candidato à Permissão Para Dirigir (PPD)?
      </Text>
      <Answer>
        <TemplateB />
      </Answer>
      <ConfirmationButton />
    </Container>
  );
};

export default Question;
