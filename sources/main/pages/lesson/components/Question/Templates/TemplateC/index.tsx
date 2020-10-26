import React, { useState } from "react";
import {
  AnswerInterface,
  QuestionAnswers,
} from "../../../../../../../domain/interfaces";

import { AnswerImageButton } from "../../../Button";
import { Container, Row, Cell, Space } from "./styles";

type Props = {
  answers: QuestionAnswers<AnswerInterface>;
  displayCorrectAnswer: boolean;
};

const TemplateC = ({ answers }: Props) => {
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
            onPress={(answer) => {}}
          />
        </Cell>
        <Space />
        <Cell>
          <AnswerImageButton
            height={buttonHeight}
            answer={answers.second}
            onPress={(answer) => {}}
          />
        </Cell>
      </Row>
      <Space />
      <Row>
        <Cell>
          <AnswerImageButton
            height={buttonHeight}
            answer={answers.third}
            onPress={(answer) => {}}
          />
        </Cell>
        <Space />
        <Cell>
          <AnswerImageButton
            height={buttonHeight}
            answer={answers.fourth}
            onPress={(answer) => {}}
          />
        </Cell>
      </Row>
    </Container>
  );
};

export default TemplateC;
