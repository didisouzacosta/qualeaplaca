import React from "react";
import { ViewStyle } from "react-native";
import AwesomeButton from "react-native-really-awesome-button";
import styled, { useTheme } from "styled-components/native";

import { TextButton } from "./../../../../components";

namespace AwesomeBaseButton {
  export type Props = {
    children?: React.ReactNode;
    selected?: boolean;
    disabled?: boolean;
    isCorrect?: boolean;
    style?: ViewStyle;
  };
}

const AwesomeBaseButton = ({
  children,
  style,
  selected,
  disabled,
  isCorrect,
}: AwesomeBaseButton.Props) => {
  const { colors } = useTheme();
  const { answerButton } = colors;

  const _disabled = disabled || selected || isCorrect;

  const activeColor = () => {
    if (isCorrect) {
      return answerButton.isCorrect;
    } else {
      return answerButton.active;
    }
  };

  const backgroundColor = () => {
    if (isCorrect) {
      return answerButton.isCorrect;
    } else if (selected) {
      return answerButton.active;
    } else {
      return answerButton.background;
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
    <AwesomeButton
      backgroundActive={activeColor()}
      backgroundDarker={raiseColor()}
      backgroundColor={backgroundColor()}
      backgroundShadow="transparent"
      borderRadius={12}
      disabled={_disabled}
      stretch={true}
      style={style}
    >
      {children}
    </AwesomeButton>
  );
};

export const Button = styled(AwesomeBaseButton)`
  opacity: ${(props) => (props.disabled ? 0.3 : 1)};
`;

export const AnswerButtonContainer = styled(AwesomeBaseButton)`
  display: flex;
  margin-bottom: 8px;
`;

export const Text = styled(TextButton)``;

export const VerifyButtonText = styled(Text)`
  text-align: center;
  color: orange;
`;

export const AnswerLabel = styled(Text)`
  width: 24px;
  margin-left: 16px;
  margin-right: 8px;
`;

export const AnswerText = styled(Text)`
  flex: 1;
  margin-right: 16px;
  font-weight: normal;
`;
