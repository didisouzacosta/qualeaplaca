import React, { useEffect } from "react";
import { Alert } from "react-native";

import useLessonState from "./hooks/useLessonState";
import { useNavigation } from "../../hooks/useNavigation";
import { Progress, Question } from "./components";
import { BarButtonItem, SafeAreaView } from "./styles";

const LessonScreen = () => {
  const navigation = useNavigation();
  const {
    pagination,
    currentQuestion,
    canDisplayCorrectAnswer,
    loadQuestions,
    onSelectAnswer,
    onConfirm,
    onNextQuestion,
  } = useLessonState();

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
      `Você está na etapa ${pagination.current}, tem certeza que deseja encerrar a lição?`,
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
      <Progress current={pagination.current} total={pagination.total} />
      {currentQuestion && (
        <Question
          question={currentQuestion}
          displayCorrectAnswer={canDisplayCorrectAnswer}
          onSelectAnswer={onSelectAnswer}
          onConfirm={onConfirm}
          onNext={onNextQuestion}
        />
      )}
    </SafeAreaView>
  );
};

export default LessonScreen;
