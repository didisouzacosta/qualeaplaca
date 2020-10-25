import React from "react";

import {
  NavigationContainer as ReactNavigationContainer,
  DarkTheme,
  Theme,
} from "@react-navigation/native";

import { useTheme } from "./../../../context/Theme";

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
