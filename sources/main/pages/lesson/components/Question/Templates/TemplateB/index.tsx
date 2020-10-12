import React from "react";
import { QuestionAnswers } from "../../../../../../../domain/interfaces/Question.interface";
import { AnswerInterface } from "../../../../../../../domain/Types";

import { AnswerButton } from "../../../Button";
import { Container, Row, Cell, Space, ImageContainer, Image } from "./styles";

type Props<T extends AnswerInterface> = {
  board?: string;
  answers: QuestionAnswers<T>;
};

const TemplateB = <T extends AnswerInterface>({ board, answers }: Props<T>) => {
  return (
    <Container>
      <ImageContainer>
        <Image resizeMode="contain" source={{ uri: board }} />
      </ImageContainer>
      <Row>
        <Cell>
          <AnswerButton
            label={`${answers.first.label} )`}
            title={`${answers.first.text}`}
          />
        </Cell>
        <Space />
        <Cell>
          <AnswerButton
            label={`${answers.second.label} )`}
            title={`${answers.second.text}`}
          />
        </Cell>
      </Row>
      <Space />
      <Row>
        <Cell>
          <AnswerButton
            label={`${answers.third.label} )`}
            title={`${answers.third.text}`}
          />
        </Cell>
        <Space />
        <Cell>
          <AnswerButton
            label={`${answers.fourth.label} )`}
            title={`${answers.fourth.text}`}
          />
        </Cell>
      </Row>
    </Container>
  );
};

export default TemplateB;
