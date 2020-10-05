import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./../pages/home";
import Boards from "./../pages/boards";
import Progress from "./../pages/progress";
import Adjusts from "./../pages/adjusts";
import About from "./../pages/about";

export type StackParams = {
  Home: undefined;
  Boards: undefined;
  Progress: undefined;
  Adjusts: undefined;
  About: undefined;
};

const Stack = createStackNavigator<StackParams>();

const StackScreen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Boards" component={Boards} />
        <Stack.Screen name="Progress" component={Progress} />
        <Stack.Screen name="Adjusts" component={Adjusts} />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackScreen;
