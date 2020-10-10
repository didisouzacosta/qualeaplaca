import React from "react";

import {
  Button,
  VerifyButtonText,
  AnswerButtonContainer,
  AnswerLabel,
  AnswerText,
} from "./styles";

type VerifyButtonProps = {
  disabled?: boolean;
};

type AnswerButtonProps = {
  label: string;
  title: string;
  disabled?: boolean;
};

export const VerifyButton = ({ disabled }: VerifyButtonProps) => (
  <Button disabled={disabled}>
    <VerifyButtonText>Verificar</VerifyButtonText>
  </Button>
);

export const AnswerButton = ({ label, title, disabled }: AnswerButtonProps) => (
  <AnswerButtonContainer disabled={disabled}>
    <AnswerLabel>{label}</AnswerLabel>
    <AnswerText>{title}</AnswerText>
  </AnswerButtonContainer>
);
