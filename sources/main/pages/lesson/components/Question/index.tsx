import React from "react";

import { ConfirmationButton } from "./../Button";
import { TemplateA, TemplateB, TemplateC } from "./Templates";

import { Container, Text, Answer } from "./styles";
import QuestionInterface, {
  QuestionType,
} from "../../../../../domain/interfaces/Question.interface";
import { AnswerInterface } from "../../../../../domain/Types";

interface Props<T extends AnswerInterface> {
  question: QuestionInterface<T>;
}

const Question = <T extends AnswerInterface>({ question }: Props<T>) => {
  const factoryTemplate = () => {
    switch (question.type) {
      case QuestionType.TemplateA:
        return <TemplateA answers={question.answers} />;
      case QuestionType.TemplateB:
        return <TemplateB board={question.board} answers={question.answers} />;
      case QuestionType.TemplateC:
        return <TemplateC />;
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
