import React from "react";
import { StyleProp, ViewStyle } from "react-native";

import {
  Button,
  Text,
  AnswerButtonContainer,
  AnswerLabel,
  AnswerText,
} from "./styles";

type ButtonProps = {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

type AnswerButtonProps = {
  label: string;
  title: string;
};

export const VerifyButton = () => (
  <Button>
    <Text style={{ textAlign: "center" }}>Verificar</Text>
  </Button>
);

export const AnswerButton = ({ label, title }: AnswerButtonProps) => (
  <AnswerButtonContainer>
    <AnswerLabel>{label}</AnswerLabel>
    <AnswerText>{title}</AnswerText>
  </AnswerButtonContainer>
);
