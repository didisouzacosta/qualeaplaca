import React, { useMemo } from "react";

import { ConfirmationButton } from "./../Button";
import { TemplateA, TemplateB, TemplateC } from "./Templates";

import { Container, Text, Answer } from "./styles";
import { QuestionType } from "../../../../../domain/interfaces/Question.interface";
import {
  AnswerInterface,
  QuestionInterface,
} from "../../../../../domain/interfaces";

interface Props<T extends AnswerInterface> {
  question: QuestionInterface<T>;
  displayCorrectAnswer: boolean;
  onSelectAnswer(answer: T): void;
  onConfirm(): void;
  onNext(): void;
}

const Question = <T extends AnswerInterface>({
  question,
  displayCorrectAnswer,
  onSelectAnswer,
  onConfirm,
  onNext,
}: Props<T>) => {
  const { type, answers, board, text } = question;
  const disabled = question.selectedAnswer() ? false : true;

  const template = () => {
    switch (type) {
      case QuestionType.TemplateA:
        return (
          <TemplateA
            answers={answers}
            displayCorrectAnswer={displayCorrectAnswer}
            onSelectAnswer={onSelectAnswer}
          />
        );
      case QuestionType.TemplateB:
        return (
          <TemplateB
            board={board}
            answers={answers}
            displayCorrectAnswer={displayCorrectAnswer}
            onSelectAnswer={onSelectAnswer}
          />
        );
      case QuestionType.TemplateC:
        return (
          <TemplateC
            answers={answers}
            displayCorrectAnswer={displayCorrectAnswer}
            onSelectAnswer={onSelectAnswer}
          />
        );
    }
  };

  const titleMemoComponent = useMemo(() => {
    return <Text>{text}</Text>;
  }, [text]);

  return (
    <Container>
      {titleMemoComponent}
      <Answer>{template()}</Answer>
      <ConfirmationButton
        disabled={disabled}
        wasAnswered={displayCorrectAnswer}
        onPress={() => {
          displayCorrectAnswer ? onNext() : onConfirm();
        }}
      />
    </Container>
  );
};

export default Question;
