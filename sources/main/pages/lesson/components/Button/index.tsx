import React from "react";
import { Image } from "react-native";

import {
  ConfirmationButtonContainer,
  ConfimationButtonText,
  AnswerButtonContainer,
  AnswerLabel,
  AnswerText,
  Load,
  AnswerButtonImage,
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
    height?: number;
    selected?: boolean;
    disabled?: boolean;
    isCorrect?: boolean;
    uri?: string;
  };
}

export const AnswerImageButton = ({
  height,
  selected,
  disabled,
  isCorrect,
  uri,
}: AnswerImageButton.Props) => (
  <AnswerButtonContainer
    height={height}
    selected={selected}
    disabled={disabled}
    isCorrect={isCorrect}
  >
    <AnswerButtonImage
      resizeMode="contain"
      source={{
        uri: uri,
      }}
    />
  </AnswerButtonContainer>
);
