import React from "react";
import { Button } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";

import { SafeAreaView, Text } from "./../../components";
import { LessonStackParams } from "./../../navigation";

type Props = StackScreenProps<LessonStackParams, "Lesson">;

const LessonScreen = ({ route, navigation }: Props) => {
  navigation.setOptions({
    headerLeft: () => {
      return <Button title="Fechar" onPress={() => navigation.goBack()} />;
    },
  });
  return (
    <>
      <SafeAreaView>
        <Text>{route.name}</Text>
      </SafeAreaView>
    </>
  );
};

export default LessonScreen;
