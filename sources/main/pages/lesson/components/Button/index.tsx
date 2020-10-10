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
  selected?: boolean;
  disabled?: boolean;
};

export const VerifyButton = ({ disabled }: VerifyButtonProps) => (
  <Button disabled={disabled}>
    <VerifyButtonText>Verificar</VerifyButtonText>
  </Button>
);

export const AnswerButton = ({
  label,
  title,
  selected,
  disabled,
}: AnswerButtonProps) => (
  <AnswerButtonContainer selected={selected} disabled={disabled}>
    <AnswerLabel>{label}</AnswerLabel>
    <AnswerText>{title}</AnswerText>
  </AnswerButtonContainer>
);
