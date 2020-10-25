import React from "react";
import { useColorScheme } from "react-native-appearance";
import { ThemeProvider as SCThemeProvider, useTheme } from "styled-components";

import themes from "./../../themes";

type ThemeProviderProp = {
  children: React.ReactNode;
};

export default function ThemeProvider({ children }: ThemeProviderProp) {
  const theme = useColorScheme() == "dark" ? themes.dark : themes.light;

  return <SCThemeProvider theme={theme}>{children}</SCThemeProvider>;
}

export { useTheme };
