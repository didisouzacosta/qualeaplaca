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
  selectAnswer(answer: T): void;
};

const TemplateB = <T extends AnswerInterface>({
  board,
  answers,
  displayCorrectAnswer,
  selectAnswer,
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
            onPress={selectAnswer}
          />
        </Cell>
        <Space />
        <Cell>
          <AnswerButton
            answer={answers.second}
            displayCorrectAnswer={displayCorrectAnswer}
            onPress={selectAnswer}
          />
        </Cell>
      </Row>
      <Space />
      <Row>
        <Cell>
          <AnswerButton
            answer={answers.third}
            displayCorrectAnswer={displayCorrectAnswer}
            onPress={selectAnswer}
          />
        </Cell>
        <Space />
        <Cell>
          <AnswerButton
            answer={answers.fourth}
            displayCorrectAnswer={displayCorrectAnswer}
            onPress={selectAnswer}
          />
        </Cell>
      </Row>
    </Container>
  );
};

export default TemplateB;
