import React from "react";
import { Text } from "react-native";
import { AnswerInterface } from "../../../../../domain/interfaces";
import SvgComponent from "./question_icon";

import {
  ConfirmationButtonContainer,
  ConfimationButtonText,
  AnswerButtonContainer,
  AnswerLabel,
  AnswerText,
  Load,
  AnswerButtonImage,
  Button,
} from "./styles";

namespace ConfirmationButton {
  export type Props = {
    wasAnswered?: boolean;
    isLoading?: boolean;
    disabled?: boolean;
    onPress?(): void;
  };
}

export const ConfirmationButton = ({
  wasAnswered,
  isLoading,
  disabled,
  onPress,
}: ConfirmationButton.Props) => {
  const buttonContent = () => {
    if (isLoading) {
      return <Load color="white" />;
    } else {
      const text = wasAnswered ? "Próxima" : "Confirmar";
      return <ConfimationButtonText>{text}</ConfimationButtonText>;
    }
  };

  return (
    <ConfirmationButtonContainer
      isLoading={isLoading}
      disabled={disabled}
      onPress={onPress}
    >
      {buttonContent()}
    </ConfirmationButtonContainer>
  );
};

namespace AnswerButton {
  export type Props<T extends AnswerInterface> = {
    answer: T;
    disabled?: boolean;
    displayCorrectAnswer?: boolean;
    onPress(answer: T): void;
  };
}

export const AnswerButton = <T extends AnswerInterface>({
  answer,
  disabled,
  displayCorrectAnswer,
  onPress,
}: AnswerButton.Props<T>) => (
  <AnswerButtonContainer
    selected={answer.isSelected}
    disabled={disabled}
    isRightAnswer={answer.isRightAnswer}
    displayCorrectAnswer={displayCorrectAnswer}
    onPress={() => onPress(answer)}
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
  disabled,
  answer,
  displayCorrectAnswer,
  onPress,
}: AnswerImageButton.Props<T>) => (
  <AnswerButtonContainer
    height={height}
    selected={answer.isSelected}
    disabled={disabled}
    isRightAnswer={answer.isRightAnswer}
    displayCorrectAnswer={displayCorrectAnswer}
    onPress={() => onPress(answer)}
  >
    <AnswerButtonImage
      resizeMode="contain"
      source={{
        uri: answer.image,
      }}
    />
  </AnswerButtonContainer>
);

namespace HelpButton {
  export type Props = {
    onPress(): void;
  };
}

export const HelpButton = ({ onPress }: HelpButton.Props) => (
  <Button onPress={onPress}>
    <Text>
      <SvgComponent />
    </Text>
  </Button>
);
