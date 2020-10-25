import React, { useEffect } from "react";
import { Alert } from "react-native";

import { useNavigation } from "../../hooks/useNavigation";

import { Progress, Question } from "./components";
import { BarButtonItem, SafeAreaView } from "./styles";
import useLessonState from "./hooks/useLessonState";

const LessonScreen = () => {
  const navigation = useNavigation();
  const { currentQuestion, loadQuestions } = useLessonState();

  useEffect(() => {
    const asyncLoadQuestions = async () => {
      await loadQuestions();
    };
    asyncLoadQuestions();
  }, []);

  navigation.setOptions({
    title: "Quiz",
    headerLeft: () => {
      return (
        <BarButtonItem title="Finalizar" onPress={() => presentCloseAlert()} />
      );
    },
    headerRight: () => {
      return (
        <BarButtonItem title="Ajuda?" onPress={() => presentHelpAlert()} />
      );
    },
  });

  const presentCloseAlert = () => {
    Alert.alert(
      "Encerrar lição",
      "Você está na etapa 5, tem certeza que deseja encerrar a lição?",
      [
        { text: "Confirmar", onPress: () => navigation.goBack() },
        { text: "Cancelar", style: "cancel" },
      ]
    );
  };

  const presentHelpAlert = () => {
    Alert.alert(
      "Precisa de ajuda?",
      "Selecione abaixo o tema que mais esteja de acordo com a sua dúvida.",
      [
        { text: "Problema na questão", onPress: () => presentCommingSoon() },
        { text: "Problema no aplicativo", onPress: () => presentCommingSoon() },
        { text: "Enviar sugestão", onPress: () => presentCommingSoon() },
        {
          text: "Cancelar",
          style: "cancel",
        },
      ]
    );
  };

  const presentCommingSoon = () => {
    alert("Em breve");
  };

  return (
    <SafeAreaView>
      <Progress percentage={59} />
      {currentQuestion && (
        <Question question={currentQuestion} displayCorrectAnswer={false} />
      )}
    </SafeAreaView>
  );
};

export default LessonScreen;
