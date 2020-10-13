import React from "react";
import { ViewProps } from "react-native";

import { BarButtonItemContainer, BarButtonItemText } from "./styles";

type Props = {
  title: string;
  style?: ViewProps;
  onPress(): void;
};

export const BarButtonItem = ({ title, style, onPress }: Props) => {
  return (
    <BarButtonItemContainer onPress={() => onPress()} style={style}>
      <BarButtonItemText>{title}</BarButtonItemText>
    </BarButtonItemContainer>
  );
};
