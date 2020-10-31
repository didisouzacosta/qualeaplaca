import React, { useMemo } from "react";

import { ConfirmationButton, HelpButton } from "./../Button";
import { TemplateA, TemplateB, TemplateC } from "./Templates";

import { Container, Text, Answer, ButtonContainer } from "./styles";
import { QuestionType } from "../../../../../domain/interfaces/Question.interface";
import {
  AnswerInterface,
  QuestionInterface,
} from "../../../../../domain/interfaces";
import { View } from "react-native";

interface Props<T extends AnswerInterface> {
  question: QuestionInterface<T>;
  displayCorrectAnswer: boolean;
  onSelectAnswer(answer: T): void;
  onConfirm(): void;
  onNext(): void;
  onHelp(): void;
}

const Question = <T extends AnswerInterface>({
  question,
  displayCorrectAnswer,
  onSelectAnswer,
  onConfirm,
  onNext,
  onHelp,
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
      <ButtonContainer>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <View style={{ flex: 1, marginRight: 8 }}>
            <ConfirmationButton
              disabled={disabled}
              wasAnswered={displayCorrectAnswer}
              onPress={() => {
                displayCorrectAnswer ? onNext() : onConfirm();
              }}
            />
          </View>
          <View style={{ width: 64 }}>
            <HelpButton onPress={onHelp} />
          </View>
        </View>
      </ButtonContainer>
    </Container>
  );
};

export default Question;
