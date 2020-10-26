import { useEffect, useState } from "react";
import { QuestionTemplateType } from "../../../../domain/models/Question";
import LoadQuestionsUseCase from "../../../../data/Lesson/LoadQuestionsUseCase";
import { AnswerInterface } from "../../../../domain/interfaces";

type Step = {
  current: number;
  total: number;
};

export default () => {
  const [index, setIndex] = useState(0);
  const [step, setStep] = useState<Step>({ current: 0, total: 0 });
  const [questions, setQuestions] = useState<QuestionTemplateType[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<
    QuestionTemplateType
  >();

  useEffect(() => {
    setCurrentQuestion(questions[index]);
    setStep((oldValue) => ({
      ...oldValue,
      total: questions.length,
      current: index + 1,
    }));
  }, [questions, index]);

  return {
    step,
    questions,
    currentQuestion,
    loadQuestions: async () => {
      const questions = await LoadQuestionsUseCase();
      setQuestions(questions);
    },
    selectAnswer: (answer: AnswerInterface) => {
      setQuestions((oldQuestions) => {
        const currentQuestion = questions[index];
        currentQuestion.selectAnswer(answer);
        return oldQuestions.map((question) => {
          return question.id === currentQuestion.id
            ? currentQuestion
            : question;
        });
      });
    },
  };
};
