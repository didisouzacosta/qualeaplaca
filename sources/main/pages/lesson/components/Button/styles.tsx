import React from "react";
import { ViewStyle } from "react-native";
import RAButton from "react-native-really-awesome-button";
import styled from "styled-components/native";

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
}: AwesomeButtonDefaultProps) => (
  <RAButton
    backgroundActive="#E4E4E4"
    backgroundDarker="#E4E4E4"
    backgroundColor="white"
    backgroundShadow="transparent"
    borderRadius={12}
    disabled={disabled}
    raiseLevel={disabled && disabled ? 0 : 4}
    stretch={true}
    style={style}
  >
    {children}
  </RAButton>
);

export const Button = styled(AwesomeButton)`
  opacity: ${(props) => (props.disabled ? 0.4 : 1)};
`;

export const AnswerButtonContainer = styled(Button)`
  display: flex;
  margin-bottom: 8px;
`;

export const Text = styled(TextButton)``;

export const VerifyButtonText = styled(Text)`
  text-align: center;
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
