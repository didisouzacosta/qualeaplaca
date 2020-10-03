import React from "react";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";
import { useColorScheme } from "react-native-appearance";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import themes from "./../themes";
import Home from "./home";

const Stack = createStackNavigator();

export default function App() {
  const theme = useColorScheme() == "dark" ? themes.dark : themes.light;

  return (
    <>
      <StatusBar style="auto" />
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="home"
              component={Home}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </>
  );
}
