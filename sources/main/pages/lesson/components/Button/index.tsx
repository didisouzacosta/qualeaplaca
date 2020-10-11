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
    height={180}
    selected={selected}
    disabled={disabled}
    isCorrect={isCorrect}
  >
    <AnswerButtonImage
      resizeMode="contain"
      source={{
        uri:
          "https://lh3.googleusercontent.com/proxy/SVjlyBeOFqPb-_dUetmtNn3RK-HfEZ6vsMWk_nAVhOndin1dNq9mb09YdxXrUYFu2oBcUVPJi6furAmRpsrZXSiMaEk7F32VVMrt3ZS4PBL4N1P-LqFy75dPRGLvCVYpHu7Apn4ItyN-SQaeF6W3RDmqKrKIyE7V",
      }}
    />
  </AnswerButtonContainer>
);
