import React from "react";
import { View } from "react-native";

import {
  ConfirmationButtonContainer,
  ConfimationButtonText,
  AnswerButtonContainer,
  AnswerLabel,
  AnswerText,
  Load,
} from "./styles";

namespace ConfirmationButton {
  export type Props = {
    alreadyAnswered?: boolean;
    isLoading?: boolean;
    disabled?: boolean;
  };
}

export const ConfirmationButton = ({
  alreadyAnswered,
  isLoading,
  disabled,
}: ConfirmationButton.Props) => {
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

namespace AnswerImageButton {
  export type Props = {
    selected?: boolean;
    disabled?: boolean;
    isCorrect?: boolean;
  };
}

export const AnswerImageButton = ({
  selected,
  disabled,
  isCorrect,
}: AnswerImageButton.Props) => (
  <AnswerButtonContainer
    selected={selected}
    disabled={disabled}
    isCorrect={isCorrect}
  >
    <View style={{ backgroundColor: "red", width: 20, height: 20 }} />
  </AnswerButtonContainer>
);
