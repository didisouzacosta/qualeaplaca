import React from "react";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";
import { useColorScheme } from "react-native-appearance";

import themes from "./../themes";
import Home from "./home";
import { SafeAreaView } from "./styles";

export default function App() {
  const theme = useColorScheme() == "dark" ? themes.dark : themes.light;

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="auto" />
      <SafeAreaView>
        <Home />
      </SafeAreaView>
    </ThemeProvider>
  );
}
