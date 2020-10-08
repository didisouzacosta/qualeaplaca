import React from "react";
import { Button } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";

import { LessonStackParams } from "./../../navigation";
import { Progress, Question } from "./components";
import { SafeAreaView } from "./styles";

type Props = StackScreenProps<LessonStackParams, "Lesson">;

const LessonScreen = ({ route, navigation }: Props) => {
  navigation.setOptions({
    title: "Quiz",
    headerLeft: () => null,
    headerRight: () => {
      return <Button title="Finalizar" onPress={() => navigation.goBack()} />;
    },
  });
  return (
    <>
      <SafeAreaView>
        <Progress percentage={29} />
        <Question />
      </SafeAreaView>
    </>
  );
};

export default LessonScreen;
