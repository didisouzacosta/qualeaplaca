import { useState } from "react";
import { QuestionTemplateType } from "../../../../domain/models/Question";
import LoadQuestionsUseCase from "../../../../data/Lesson/LoadQuestionsUseCase";
import { AnswerInterface } from "../../../../domain/interfaces";

export default () => {
  const [questions, setQuestions] = useState<QuestionTemplateType[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<
    QuestionTemplateType
  >();

  return {
    questions,
    currentQuestion,
    loadQuestions: async () => {
      const questions = await LoadQuestionsUseCase();
      setQuestions(questions);
      setCurrentQuestion(questions[0]);
    },
    selectAnswer: (answer: AnswerInterface) => {
      currentQuestion?.selectAnswer(answer);
      console.log(currentQuestion);
    },
  };
};
