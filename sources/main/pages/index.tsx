import React from "react";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";
import { useColorScheme } from "react-native-appearance";

import themes from "./../themes";
import StackScreens from "./../navigation";

export default function App() {
  const theme = useColorScheme() == "dark" ? themes.dark : themes.light;

  return (
    <>
      <StatusBar style="auto" />
      <ThemeProvider theme={theme}>
        <StackScreens />
      </ThemeProvider>
    </>
  );
}
