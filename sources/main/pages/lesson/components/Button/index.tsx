import React from "react";

import {
  VerifyButtonContainer,
  VerifyButtonText,
  AnswerButtonContainer,
  AnswerLabel,
  AnswerText,
  Load,
} from "./styles";

namespace VerifyButton {
  export type Props = {
    isLoading?: boolean;
    disabled?: boolean;
  };
}

export const VerifyButton = ({ isLoading, disabled }: VerifyButton.Props) => (
  <VerifyButtonContainer isLoading={isLoading} disabled={disabled}>
    {isLoading && isLoading && <Load color="white" />}
    {!isLoading && <VerifyButtonText>Verificar</VerifyButtonText>}
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
