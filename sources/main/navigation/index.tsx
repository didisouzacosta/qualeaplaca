import React from "react";
import { useTheme } from "styled-components";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import HomeScreen from "./../pages/home";
import BoardsScreen from "./../pages/boards";
import ProgressScreen from "./../pages/progress";
import AdjustsScreen from "./../pages/adjusts";
import AboutScreen from "./../pages/about";
import LessonScreen from "./../pages/lesson";

import { LessonType } from "./../enums";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type LessonProps = {
  type: LessonType;
};

export type MainStackParams = {
  Home: undefined;
  Boards: undefined;
  Progress: undefined;
  Adjusts: undefined;
  About: undefined;
};

export type LessonStackParams = {
  Lesson: LessonProps;
};

export type RootStackParams = {
  Main: undefined;
  Lesson: undefined;
};

const MainStack = createStackNavigator<MainStackParams>();
const LessonStack = createStackNavigator<LessonStackParams>();
const RootStack = createStackNavigator<RootStackParams>();

const MainStackScreen = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <MainStack.Screen name="Boards" component={BoardsScreen} />
      <MainStack.Screen name="Progress" component={ProgressScreen} />
      <MainStack.Screen name="Adjusts" component={AdjustsScreen} />
      <MainStack.Screen name="About" component={AboutScreen} />
    </MainStack.Navigator>
  );
};

const LessonStackScreen = () => {
  const { colors } = useTheme();
  const { left } = useSafeAreaInsets();

  const margin = left + 16;

  return (
    <LessonStack.Navigator
      screenOptions={{
        safeAreaInsets: { left: margin, right: margin },
        headerTintColor: colors.text,
        headerStyle: {
          shadowColor: "transparent",
          backgroundColor: colors.backgroundColor,
        },
      }}
    >
      <LessonStack.Screen name="Lesson" component={LessonScreen} />
    </LessonStack.Navigator>
  );
};

const RootStackScreen = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          gestureEnabled: false,
          ...TransitionPresets.ModalTransition,
        }}
        headerMode="none"
      >
        <RootStack.Screen name="Main" component={MainStackScreen} />
        <RootStack.Screen name="Lesson" component={LessonStackScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootStackScreen;
