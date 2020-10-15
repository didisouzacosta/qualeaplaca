import React from "react";

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
  const factoryTemplate = () => {
    switch (question.type) {
      case QuestionType.TemplateA:
        return (
          <TemplateA
            answers={question.answers}
            displayCorrectAnswer={displayCorrectAnswer}
          />
        );
      case QuestionType.TemplateB:
        return (
          <TemplateB
            board={question.board}
            answers={question.answers}
            displayCorrectAnswer={displayCorrectAnswer}
          />
        );
      case QuestionType.TemplateC:
        return (
          <TemplateC
            answers={question.answers}
            displayCorrectAnswer={displayCorrectAnswer}
          />
        );
    }
  };

  return (
    <Container>
      <Text>{question.text}</Text>
      <Answer>{factoryTemplate()}</Answer>
      <ConfirmationButton disabled={!question?.selectedAnswer} />
    </Container>
  );
};

export default Question;
