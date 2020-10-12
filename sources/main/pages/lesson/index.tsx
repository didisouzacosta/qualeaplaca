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
      "https://isinaliza.vteximg.com.br/arquivos/ids/169845-512-512/3595-placa-passagem-sinalizada-de-pedestres-a-32b-aluminio-refletivo-acm-100x100cm-1.jpg?v=636800695297000000",
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
      <Progress percentage={59} />
      <Question question={question} />
    </SafeAreaView>
  );
};

export default LessonScreen;
