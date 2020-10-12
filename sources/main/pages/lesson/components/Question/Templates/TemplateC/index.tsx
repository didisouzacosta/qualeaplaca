import React, { useState } from "react";
import { AnswerInterface } from "../../../../../../../domain/interfaces";
import { QuestionAnswers } from "../../../../../../../domain/interfaces/Question.interface";

import { AnswerImageButton } from "../../../Button";
import { Container, Row, Cell, Space } from "./styles";

type Props = {
  answers: QuestionAnswers<AnswerInterface>;
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
          <AnswerImageButton height={buttonHeight} uri={answers.first.image} />
        </Cell>
        <Space />
        <Cell>
          <AnswerImageButton height={buttonHeight} uri={answers.second.image} />
        </Cell>
      </Row>
      <Space />
      <Row>
        <Cell>
          <AnswerImageButton height={buttonHeight} uri={answers.third.image} />
        </Cell>
        <Space />
        <Cell>
          <AnswerImageButton height={buttonHeight} uri={answers.fourth.image} />
        </Cell>
      </Row>
    </Container>
  );
};

export default TemplateC;
