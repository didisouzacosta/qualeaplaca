import React, { useState } from "react";
import {
  AnswerInterface,
  QuestionAnswers,
} from "../../../../../../../domain/interfaces";

import { AnswerImageButton } from "../../../Button";
import { Container, Row, Cell, Space } from "./styles";

type Props<T extends AnswerInterface> = {
  answers: QuestionAnswers<T>;
  displayCorrectAnswer: boolean;
  onSelectAnswer(answer: T): void;
};

const TemplateC = <T extends AnswerInterface>({
  answers,
  onSelectAnswer,
}: Props<T>) => {
  const [buttonHeight, setButtonHeight] = useState(0);

  return (
    <Container>
      <Row>
        <Cell
          onLayout={(event) => {
            const { height } = event.nativeEvent.layout;
            setButtonHeight(height);
          }}
        >
          <AnswerImageButton
            height={buttonHeight}
            answer={answers.first}
            onPress={onSelectAnswer}
          />
        </Cell>
        <Space />
        <Cell>
          <AnswerImageButton
            height={buttonHeight}
            answer={answers.second}
            onPress={onSelectAnswer}
          />
        </Cell>
      </Row>
      <Space />
      <Row>
        <Cell>
          <AnswerImageButton
            height={buttonHeight}
            answer={answers.third}
            onPress={onSelectAnswer}
          />
        </Cell>
        <Space />
        <Cell>
          <AnswerImageButton
            height={buttonHeight}
            answer={answers.fourth}
            onPress={onSelectAnswer}
          />
        </Cell>
      </Row>
    </Container>
  );
};

export default TemplateC;
