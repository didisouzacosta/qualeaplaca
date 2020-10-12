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

  const question = new QuestionTemplateB({
    text: "Qual é o nome correto da placa abaixo?",
    board:
      "https://lh3.googleusercontent.com/proxy/SVjlyBeOFqPb-_dUetmtNn3RK-HfEZ6vsMWk_nAVhOndin1dNq9mb09YdxXrUYFu2oBcUVPJi6furAmRpsrZXSiMaEk7F32VVMrt3ZS4PBL4N1P-LqFy75dPRGLvCVYpHu7Apn4ItyN-SQaeF6W3RDmqKrKIyE7V",
    answers: {
      first: { id: 1, label: "a", text: "A-3b" },
      second: { id: 2, label: "b", text: "A-4a" },
      third: { id: 3, label: "c", text: "A-5b" },
      fourth: { id: 4, label: "d", text: "A-3a" },
      rightAnswer: 4,
    },
  });

  return (
    <SafeAreaView>
      <Progress percentage={29} />
      <Question question={question} />
    </SafeAreaView>
  );
};

export default LessonScreen;
