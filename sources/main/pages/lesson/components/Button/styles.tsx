import React from "react";
import { ViewStyle } from "react-native";
import styled, { useTheme } from "styled-components/native";
import AwesomeButton from "react-native-really-awesome-button";

import { TextButton } from "./../../../../components";

namespace BaseAnswerButton {
  export type Props = {
    children?: React.ReactNode;
    selected?: boolean;
    disabled?: boolean;
    isCorrect?: boolean;
    style?: ViewStyle;
  };
}

namespace BaseButton {
  export type Props = {
    children?: React.ReactNode;
    disabled?: boolean;
    backgroundActive?: string;
    backgroundDarker?: string;
    backgroundColor?: string;
    style?: ViewStyle;
  };
}

const BaseButton = ({
  children,
  style,
  disabled,
  backgroundActive,
  backgroundDarker,
  backgroundColor,
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
      borderRadius={12}
      disabled={disabled}
      stretch={true}
      style={style}
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
  selected,
  disabled,
  isCorrect,
}: BaseAnswerButton.Props) => {
  const { colors } = useTheme();
  const { answerButton } = colors;

  const activeColor = () => {
    if (isCorrect) {
      return answerButton.backgroundIsCorrectColor;
    } else {
      return answerButton.backgroundActiveColor;
    }
  };

  const backgroundColor = () => {
    if (isCorrect) {
      return answerButton.backgroundIsCorrectColor;
    } else if (selected) {
      return answerButton.backgroundActiveColor;
    } else {
      return answerButton.backgroundColor;
    }
  };

  const raiseColor = () => {
    if (isCorrect) {
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
      disabled={disabled || selected || isCorrect}
      style={style}
    >
      {children}
    </Button>
  );
};

export const AnswerButtonContainer = styled(BaseAnswerButton)`
  display: flex;
  margin-bottom: 8px;
  opacity: ${(props) => (props.disabled ? 0.3 : 1)};
`;

export const VerifyButtonContainer = styled(BaseButton)``;

export const VerifyButtonText = styled(TextButton)`
  text-align: center;
  color: orange;
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