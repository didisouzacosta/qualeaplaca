import React from "react";
import { Button } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";

import { SafeAreaView } from "./../../components";
import { LessonStackParams } from "./../../navigation";

import { Progress } from "./components";
import { Text } from "./styles";

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
        <Text>Qual placara é "A-15 (Semáforo à frente)"?</Text>
      </SafeAreaView>
    </>
  );
};

export default LessonScreen;
