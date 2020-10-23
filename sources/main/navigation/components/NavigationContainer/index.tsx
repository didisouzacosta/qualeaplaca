import React from "react";
import { useTheme } from "styled-components";

import {
  NavigationContainer as ReactNavigationContainer,
  DarkTheme,
  Theme,
} from "@react-navigation/native";

type Props = {
  children: React.ReactNode;
};

export const NavigationContainer = ({ children }: Props) => {
  const { colors } = useTheme();

  const theme: Theme = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      primary: colors.text,
      text: colors.text,
      card: colors.backgroundColor,
      border: colors.backgroundColor,
    },
  };

  return (
    <ReactNavigationContainer theme={theme}>
      {children}
    </ReactNavigationContainer>
  );
};
