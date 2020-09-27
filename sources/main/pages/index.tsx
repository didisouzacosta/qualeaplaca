import React from "react";
import { ThemeProvider } from "styled-components";
import { useColorScheme } from "react-native-appearance";

import themes from "./../themes";
import Home from "./home";

export default function App() {
  const theme = useColorScheme() == "dark" ? themes.dark : themes.light;

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}
