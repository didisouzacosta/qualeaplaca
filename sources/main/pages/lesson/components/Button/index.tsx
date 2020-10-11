import React from "react";

import {
  Button,
  VerifyButtonText,
  AnswerButtonContainer,
  AnswerLabel,
  AnswerText,
} from "./styles";

namespace VerifyButton {
  export type Props = {
    disabled?: boolean;
  };
}

export const VerifyButton = ({ disabled }: VerifyButton.Props) => (
  <Button disabled={disabled}>
    <VerifyButtonText>Verificar</VerifyButtonText>
  </Button>
);

namespace AnswerButton {
  export type Props = {
    label: string;
    title: string;
    selected?: boolean;
    disabled?: boolean;
    isCorrect?: boolean;
  };
}

export const AnswerButton = ({
  label,
  title,
  selected,
  disabled,
  isCorrect,
}: AnswerButton.Props) => (
  <AnswerButtonContainer
    selected={selected}
    disabled={disabled}
    isCorrect={isCorrect}
  >
    <AnswerLabel>{label}</AnswerLabel>
    <AnswerText>{title}</AnswerText>
  </AnswerButtonContainer>
);
