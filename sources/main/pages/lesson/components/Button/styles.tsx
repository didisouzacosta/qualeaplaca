import React from "react";
import { ViewStyle } from "react-native";
import RAButton from "react-native-really-awesome-button";
import styled, { useTheme } from "styled-components/native";

import { TextButton } from "./../../../../components";

type AwesomeButtonDefaultProps = {
  children?: React.ReactNode;
  selected?: boolean;
  disabled?: boolean;
  style?: ViewStyle;
};

const AwesomeButton = ({
  children,
  style,
  selected,
  disabled,
}: AwesomeButtonDefaultProps) => {
  const { colors } = useTheme();
  const { answerButton } = colors;

  const backgroundColor = selected
    ? answerButton.active
    : answerButton.background;

  const raiseColor = selected
    ? answerButton.raiseSelectedColor
    : answerButton.raiseColor;

  return (
    <RAButton
      backgroundActive={answerButton.active}
      backgroundDarker={raiseColor}
      backgroundColor={backgroundColor}
      backgroundShadow="transparent"
      borderRadius={12}
      disabled={disabled || selected}
      // raiseLevel={selected ? 0 : 4}
      stretch={true}
      style={style}
    >
      {children}
    </RAButton>
  );
};

export const Button = styled(AwesomeButton)`
  opacity: ${(props) => (props.disabled ? 0.3 : 1)};
`;

export const AnswerButtonContainer = styled(Button)`
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
  color: orange;
`;

export const AnswerText = styled(Text)`
  flex: 1;
  margin-right: 16px;
  font-weight: normal;
`;
