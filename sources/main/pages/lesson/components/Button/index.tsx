import React from "react";

import {
  ConfirmationButtonContainer,
  ConfimationButtonText,
  AnswerButtonContainer,
  AnswerLabel,
  AnswerText,
  Load,
} from "./styles";

namespace VerifyButton {
  export type Props = {
    alreadyAnswered?: boolean;
    isLoading?: boolean;
    disabled?: boolean;
  };
}

export const VerifyButton = ({
  alreadyAnswered,
  isLoading,
  disabled,
}: VerifyButton.Props) => {
  const buttonContent = () => {
    if (isLoading) {
      return <Load color="white" />;
    } else if (alreadyAnswered) {
      return <ConfimationButtonText>Próxima questão</ConfimationButtonText>;
    } else {
      return <ConfimationButtonText>Confirmar</ConfimationButtonText>;
    }
  };

  return (
    <ConfirmationButtonContainer isLoading={isLoading} disabled={disabled}>
      {buttonContent()}
    </ConfirmationButtonContainer>
  );
};

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
