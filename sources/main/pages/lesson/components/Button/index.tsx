import React from "react";
import { AnswerInterface } from "../../../../../domain/interfaces";

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
  export type Props<T extends AnswerInterface> = {
    answer: T;
    selected?: boolean;
    disabled?: boolean;
    displayCorrectAnswer?: boolean;
  };
}

export const AnswerButton = <T extends AnswerInterface>({
  answer,
  selected,
  disabled,
  displayCorrectAnswer,
}: AnswerButton.Props<T>) => (
  <AnswerButtonContainer
    selected={selected}
    disabled={disabled}
    isRightAnswer={answer.isRightAnswer}
    displayCorrectAnswer={displayCorrectAnswer}
  >
    <AnswerLabel>{`${answer.label} )`}</AnswerLabel>
    <AnswerText>{answer.text}</AnswerText>
  </AnswerButtonContainer>
);

namespace AnswerImageButton {
  export type Props<T extends AnswerInterface> = AnswerButton.Props<T> & {
    height?: number;
  };
}

export const AnswerImageButton = <T extends AnswerInterface>({
  height,
  selected,
  disabled,
  answer,
  displayCorrectAnswer,
}: AnswerImageButton.Props<T>) => (
  <AnswerButtonContainer
    height={height}
    selected={selected}
    disabled={disabled}
    isRightAnswer={answer.isRightAnswer}
    displayCorrectAnswer={displayCorrectAnswer}
  >
    <AnswerButtonImage
      resizeMode="contain"
      source={{
        uri: answer.image,
      }}
    />
  </AnswerButtonContainer>
);
