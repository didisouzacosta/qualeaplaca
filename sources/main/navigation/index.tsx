import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./../pages/home";
import BoardsScreen from "./../pages/boards";
import ProgressScreen from "./../pages/progress";
import AdjustsScreen from "./../pages/adjusts";
import AboutScreen from "./../pages/about";

export type StackParams = {
  Home: undefined;
  Boards: undefined;
  Progress: undefined;
  Adjusts: undefined;
  About: undefined;
  Lesson: undefined;
};

const Stack = createStackNavigator<StackParams>();

const StackScreen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Boards" component={BoardsScreen} />
        <Stack.Screen name="Progress" component={ProgressScreen} />
        <Stack.Screen name="Adjusts" component={AdjustsScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackScreen;
