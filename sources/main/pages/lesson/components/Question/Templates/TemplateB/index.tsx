import React from "react";
import {
  AnswerInterface,
  QuestionAnswers,
} from "../../../../../../../domain/interfaces";

import { AnswerButton } from "../../../Button";
import { Container, Row, Cell, Space, ImageContainer, Image } from "./styles";

type Props<T extends AnswerInterface> = {
  board?: string;
  answers: QuestionAnswers<T>;
  displayCorrectAnswer: boolean;
  onSelectAnswer(answer: T): void;
};

const TemplateB = <T extends AnswerInterface>({
  board,
  answers,
  displayCorrectAnswer,
  onSelectAnswer,
}: Props<T>) => {
  return (
    <Container>
      <ImageContainer>
        <Image resizeMode="contain" source={{ uri: board }} />
      </ImageContainer>
      <Row>
        <Cell>
          <AnswerButton
            answer={answers.first}
            displayCorrectAnswer={displayCorrectAnswer}
            onPress={onSelectAnswer}
          />
        </Cell>
        <Space />
        <Cell>
          <AnswerButton
            answer={answers.second}
            displayCorrectAnswer={displayCorrectAnswer}
            onPress={onSelectAnswer}
          />
        </Cell>
      </Row>
      <Space />
      <Row>
        <Cell>
          <AnswerButton
            answer={answers.third}
            displayCorrectAnswer={displayCorrectAnswer}
            onPress={onSelectAnswer}
          />
        </Cell>
        <Space />
        <Cell>
          <AnswerButton
            answer={answers.fourth}
            displayCorrectAnswer={displayCorrectAnswer}
            onPress={onSelectAnswer}
          />
        </Cell>
      </Row>
    </Container>
  );
};

export default TemplateB;
