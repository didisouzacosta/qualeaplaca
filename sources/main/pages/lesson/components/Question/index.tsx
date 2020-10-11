import React from "react";

import { VerifyButton } from "./../Button";
import { TemplateA } from "./Templates";

import { Container, Text, Answer } from "./styles";

const Question = () => {
  return (
    <Container>
      <Text>
        Qual a carga horária obrigatória no curso teórico-técnico para o
        candidato à Permissão Para Dirigir (PPD)?
      </Text>
      <Answer>
        <TemplateA />
      </Answer>
      <VerifyButton disabled={false} />
    </Container>
  );
};

export default Question;
