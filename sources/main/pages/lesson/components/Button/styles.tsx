import React from "react";
import { ViewStyle } from "react-native";
import RAButton from "react-native-really-awesome-button";
import styled, { useTheme } from "styled-components/native";

import { TextButton } from "./../../../../components";

type AwesomeButtonDefaultProps = {
  children?: React.ReactNode;
  disabled?: boolean;
  style?: ViewStyle;
};

const AwesomeButton = ({
  children,
  style,
  disabled,
}: AwesomeButtonDefaultProps) => {
  const { colors } = useTheme();
  return (
    <RAButton
      backgroundActive={colors.answerButton.active}
      backgroundDarker={colors.answerButton.raiseColor}
      backgroundColor={colors.answerButton.background}
      backgroundShadow="transparent"
      borderRadius={12}
      disabled={disabled}
      raiseLevel={disabled ? 0 : 4}
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
