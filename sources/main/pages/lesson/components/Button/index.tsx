import React from "react";
import { StyleProp, ViewStyle } from "react-native";

import { Button, Text } from "./styles";

type TextButtonProps = {
  title: string;
  style?: StyleProp<ViewStyle>;
};

export const VerifyButton = () => (
  <Button>
    <Text>Verificar</Text>
  </Button>
);

export const TextButton = ({ title, style }: TextButtonProps) => (
  <Button style={style}>
    <Text>{title}</Text>
  </Button>
);
