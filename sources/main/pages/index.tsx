import React from "react";
import { StatusBar } from "expo-status-bar";

import StackScreens from "./../navigation";
import ThemeProvider from "./../context/Theme";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <ThemeProvider>
        <StackScreens />
      </ThemeProvider>
    </>
  );
}
