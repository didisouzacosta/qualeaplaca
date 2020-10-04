import React from "react";
import { NavigationContainer, ParamListBase } from "@react-navigation/native";
import {
  createStackNavigator,
  StackScreenProps,
} from "@react-navigation/stack";

import Home from "./../pages/home";
import Boards from "./../pages/boards";

export type StackParams = {
  Home: undefined;
  Boards: undefined;
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackScreen;
