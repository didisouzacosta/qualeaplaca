import React from "react";
import { Button } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";

import { LessonStackParams } from "./../../navigation";
import { Progress, Question } from "./components";
import { SafeAreaView } from "./styles";
import {
  QuestionTemplateA,
  QuestionTemplateB,
} from "../../../domain/models/Question";

type Props = StackScreenProps<LessonStackParams, "Lesson">;

const LessonScreen = ({ route, navigation }: Props) => {
  navigation.setOptions({
    title: "Quiz",
    headerLeft: () => null,
    headerRight: () => {
      return <Button title="Finalizar" onPress={() => navigation.goBack()} />;
    },
  });

  const question = new QuestionTemplateB("Qual o nome da placa abaixo?", {
    first: { id: 1, label: "a", text: "Answer A" },
    second: { id: 2, label: "b", text: "Answer B" },
    third: { id: 3, label: "c", text: "Answer C" },
    fourth: { id: 4, label: "d", text: "Answer D" },
    rightAnswer: 1,
  });

  return (
    <SafeAreaView>
      <Progress percentage={29} />
      <Question question={question} />
    </SafeAreaView>
  );
};

export default LessonScreen;
