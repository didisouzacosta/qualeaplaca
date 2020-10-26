import { useEffect, useState } from "react";
import {
  QuestionTemplateB,
  QuestionTemplateType,
} from "../../../../domain/models/Question";
import LoadQuestionsUseCase from "../../../../data/Lesson/LoadQuestionsUseCase";
import { AnswerInterface } from "../../../../domain/interfaces";

export default () => {
  const [index, setIndex] = useState(0);
  const [questions, setQuestions] = useState<QuestionTemplateType[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<
    QuestionTemplateType
  >();

  useEffect(() => {
    setCurrentQuestion(questions[index]);
  }, [questions, index]);

  return {
    questions,
    currentQuestion,
    loadQuestions: async () => {
      const questions = await LoadQuestionsUseCase();
      setQuestions(questions);
    },
    selectAnswer: (answer: AnswerInterface) => {
      setQuestions((oldQuestions) => {
        return oldQuestions.map((question) => {
          const currentQuestion = questions[index];
          currentQuestion.selectAnswer(answer);
          return question.id === currentQuestion.id
            ? currentQuestion
            : question;
        });
      });
    },
  };
};
