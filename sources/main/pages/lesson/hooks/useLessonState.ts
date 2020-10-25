import { useState, useEffect } from "react";
import { QuestionTemplateType } from "../../../../domain/models/Question";
import LoadQuestionsUseCase from "../../../../data/Lesson/LoadQuestionsUseCase";

export default () => {
  const [questions, setQuestions] = useState<QuestionTemplateType[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<
    QuestionTemplateType
  >();

  useEffect(() => {
    const firstQuestion = questions[1];
    if (!firstQuestion) return;
    setCurrentQuestion(firstQuestion);
  }, [questions]);

  return {
    questions,
    currentQuestion,
    loadQuestions: async () => {
      const questions = await LoadQuestionsUseCase();
      setQuestions(questions);
    },
  };
};
