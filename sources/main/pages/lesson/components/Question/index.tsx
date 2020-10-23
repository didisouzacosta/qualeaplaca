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
}

const Question = <T extends AnswerInterface>({
  question,
  displayCorrectAnswer,
}: Props<T>) => {
  const { type, answers, board, text } = question;

  const disabled = (): boolean => {
    return question.selectedAnswer() ? false : true;
  };

  const factoryTemplate = () => {
    switch (type) {
      case QuestionType.TemplateA:
        return (
          <TemplateA
            answers={answers}
            displayCorrectAnswer={displayCorrectAnswer}
          />
        );
      case QuestionType.TemplateB:
        return (
          <TemplateB
            board={board}
            answers={answers}
            displayCorrectAnswer={displayCorrectAnswer}
          />
        );
      case QuestionType.TemplateC:
        return (
          <TemplateC
            answers={answers}
            displayCorrectAnswer={displayCorrectAnswer}
          />
        );
    }
  };

  return (
    <Container>
      <Text>{text}</Text>
      <Answer>{factoryTemplate()}</Answer>
      <ConfirmationButton
        disabled={disabled()}
        wasAnswered={displayCorrectAnswer}
      />
    </Container>
  );
};

export default Question;
