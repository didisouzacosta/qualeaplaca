import React from "react";

import {
  VerifyButtonContainer,
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
  <VerifyButtonContainer disabled={disabled}>
    <VerifyButtonText>Verificar</VerifyButtonText>
  </VerifyButtonContainer>
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
