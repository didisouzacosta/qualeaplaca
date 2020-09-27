import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import { ThemeProvider } from "styled-components";
import { useColorScheme } from "react-native-appearance";

import themes from "./../themes";

import Home from "./home";

export default function App() {
  const colorScheme = useColorScheme();
  const [theme, setTheme] = useState(themes.light);

  useEffect(() => {
    setTheme(colorScheme == "light" ? themes.light : themes.dark);
  }, [colorScheme]);

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}
