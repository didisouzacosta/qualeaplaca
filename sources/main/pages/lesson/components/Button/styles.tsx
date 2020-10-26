import React from "react";
import { ViewStyle } from "react-native";
import styled from "styled-components/native";
import AwesomeButton from "react-native-really-awesome-button";

import { TextButton } from "./../../../../components";
import { useTheme } from "./../../../../context/Theme";

namespace BaseButton {
  export type Props = {
    children?: React.ReactNode;
    height?: number;
    disabled?: boolean;
    backgroundActive?: string;
    backgroundDarker?: string;
    backgroundColor?: string;
    style?: ViewStyle;
    onPress?(): void;
  };
}

namespace BaseAnswerButton {
  export type Props = {
    children?: React.ReactNode;
    height?: number;
    selected?: boolean;
    disabled?: boolean;
    isRightAnswer?: boolean;
    displayCorrectAnswer?: boolean;
    style?: ViewStyle;
    onPress?(): void;
  };
}

namespace BaseConfirmationButton {
  export type Props = {
    children?: React.ReactNode;
    disabled?: boolean;
    isLoading?: boolean;
    style?: ViewStyle;
  };
}

const BaseButton = ({
  children,
  style,
  disabled,
  height,
  backgroundActive,
  backgroundDarker,
  backgroundColor,
  onPress,
}: BaseButton.Props) => {
  const { colors } = useTheme();
  const { button } = colors;

  const _backgroundActive = backgroundActive ?? button.backgroundActiveColor;
  const _backgroundColor = backgroundColor ?? button.backgroundColor;
  const _backgroundDarker = backgroundDarker ?? button.raiseColor;

  return (
    <AwesomeButton
      backgroundActive={_backgroundActive}
      backgroundDarker={_backgroundDarker}
      backgroundColor={_backgroundColor}
      backgroundShadow="transparent"
      borderRadius={16}
      height={height}
      disabled={disabled}
      stretch={true}
      style={style}
      onPress={onPress}
    >
      {children}
    </AwesomeButton>
  );
};

export const Button = styled(BaseButton)`
  opacity: ${(props) => (props.disabled ? 0.3 : 1)};
`;

const BaseAnswerButton = ({
  children,
  style,
  height,
  selected,
  disabled,
  isRightAnswer,
  displayCorrectAnswer,
  onPress,
}: BaseAnswerButton.Props) => {
  const { colors } = useTheme();
  const { answerButton } = colors;
  const canDisplayCorrectAnswer = displayCorrectAnswer && isRightAnswer;

  const activeColor = () => {
    if (canDisplayCorrectAnswer) {
      return answerButton.backgroundIsCorrectColor;
    } else {
      return answerButton.backgroundActiveColor;
    }
  };

  const backgroundColor = () => {
    if (canDisplayCorrectAnswer) {
      return answerButton.backgroundIsCorrectColor;
    } else if (selected) {
      return answerButton.backgroundSelectedColor;
    } else {
      return answerButton.backgroundColor;
    }
  };

  const raiseColor = () => {
    if (canDisplayCorrectAnswer) {
      return answerButton.raiseIsCorrectColor;
    } else if (selected) {
      return answerButton.raiseSelectedColor;
    } else {
      return answerButton.raiseColor;
    }
  };

  return (
    <Button
      backgroundActive={activeColor()}
      backgroundDarker={raiseColor()}
      backgroundColor={backgroundColor()}
      disabled={disabled || selected || displayCorrectAnswer}
      height={height}
      style={style}
      onPress={onPress}
    >
      {children}
    </Button>
  );
};

const BaseConfirmationButton = ({
  children,
  style,
  disabled,
  isLoading,
}: BaseConfirmationButton.Props) => {
  const { colors } = useTheme();
  const { verifyButton } = colors;

  return (
    <Button
      backgroundActive={verifyButton.backgroundActiveColor}
      backgroundDarker={verifyButton.raiseColor}
      backgroundColor={verifyButton.backgroundColor}
      disabled={disabled || isLoading}
      style={style}
    >
      {children}
    </Button>
  );
};

export const AnswerButtonContainer = styled(BaseAnswerButton)`
  display: flex;
  opacity: ${(props) =>
    props.displayCorrectAnswer && !props.isRightAnswer && !props.selected
      ? 0.3
      : 1};
`;

export const ConfirmationButtonContainer = styled(BaseConfirmationButton)`
  opacity: ${(props) => (props.disabled ? 0.3 : 1)};
`;

export const Load = styled.ActivityIndicator``;

export const ConfimationButtonText = styled(TextButton)`
  text-align: center;
  color: white;
`;

export const AnswerLabel = styled(TextButton)`
  width: 24px;
  margin-left: 16px;
  margin-right: 8px;
`;

export const AnswerText = styled(TextButton)`
  flex: 1;
  margin-right: 16px;
  font-weight: normal;
`;

export const AnswerButtonImage = styled.Image`
  width: 80%;
  height: 80%;
`;
