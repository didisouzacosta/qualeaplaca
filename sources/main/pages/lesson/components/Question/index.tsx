import React, { useState } from "react";

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
}

const Question = <T extends AnswerInterface>({
  question,
  displayCorrectAnswer,
  onSelectAnswer,
  onConfirm,
}: Props<T>) => {
  const { type, answers, board, text } = question;

  const disabled = (): boolean => {
    return question.selectedAnswer() ? false : true;
  };

  const factoryTemplate = () => {
    const templateA = (
      <TemplateA
        answers={answers}
        displayCorrectAnswer={displayCorrectAnswer}
        onSelectAnswer={onSelectAnswer}
      />
    );

    const templateB = (
      <TemplateB
        board={board}
        answers={answers}
        displayCorrectAnswer={displayCorrectAnswer}
        onSelectAnswer={onSelectAnswer}
      />
    );

    const templateC = (
      <TemplateC
        answers={answers}
        displayCorrectAnswer={displayCorrectAnswer}
        onSelectAnswer={onSelectAnswer}
      />
    );

    switch (type) {
      case QuestionType.TemplateA:
        return templateA;
      case QuestionType.TemplateB:
        return templateB;
      case QuestionType.TemplateC:
        return templateC;
    }
  };

  return (
    <Container>
      <Text>{text}</Text>
      <Answer>{factoryTemplate()}</Answer>
      <ConfirmationButton
        disabled={disabled()}
        wasAnswered={displayCorrectAnswer}
        onPress={onConfirm}
      />
    </Container>
  );
};

export default Question;
