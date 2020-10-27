import { useState, useMemo } from "react";
import { Vibration } from "react-native";
import { QuestionTemplateType } from "../../../../domain/models/Question";
import LoadQuestionsUseCase from "../../../../data/Lesson/LoadQuestionsUseCase";
import { AnswerInterface } from "../../../../domain/interfaces";
import {
  playCorrectlyAnswerSound,
  playIncorrectlyAnswerSound,
} from "./../../../utils/Audio";

type QuestionStep = Readonly<{
  isConfirmed: boolean;
  question: QuestionTemplateType;
}>;

export default () => {
  const [index, setIndex] = useState(0);
  const [steps, setSteps] = useState<QuestionStep[]>([]);

  const questions = steps.map((step) => step.question);
  const currentStep = steps[index];
  const currentQuestion = currentStep?.question;
  const pagination = { current: index + 1, total: steps.length };
  const canDisplayCorrectAnswer = currentStep?.isConfirmed ?? false;

  const loadQuestions = async () => {
    const questions = await LoadQuestionsUseCase();
    const steps = questions.map((question) => ({
      isConfirmed: false,
      question,
    }));
    setSteps(steps);
  };

  const onConfirm = async () => {
    const updatedStep: QuestionStep = { ...currentStep, isConfirmed: true };
    setSteps((oldValue) =>
      oldValue.map((step) =>
        step.question.id === updatedStep.question.id ? updatedStep : step
      )
    );

    if (currentQuestion.isCorrect()) {
      await playCorrectlyAnswerSound();
    } else {
      Vibration.vibrate(1);
      await playIncorrectlyAnswerSound();
    }
  };

  const onNextQuestion = () => {
    setIndex((oldValue) => oldValue + 1);
  };

  const onSelectAnswer = (answer: AnswerInterface) => {
    setSteps((oldValue) => {
      currentQuestion.selectAnswer(answer);
      return oldValue.map((step) => {
        return step.question.id === currentQuestion.id
          ? { ...step, question: currentQuestion }
          : step;
      });
    });
  };

  return {
    pagination,
    questions,
    currentQuestion,
    canDisplayCorrectAnswer,
    loadQuestions,
    onSelectAnswer,
    onConfirm,
    onNextQuestion,
  };
};
