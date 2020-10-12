import React from "react";
import { QuestionAnswers } from "../../../../../../../domain/interfaces/Question.interface";
import { TextAnswerType } from "../../../../../../../domain/Types";

import { AnswerButton } from "../../../Button";

import { Container, Row, Cell, Space, ImageContainer, Image } from "./styles";

type Props = {
  answers: QuestionAnswers<TextAnswerType>;
};

const TemplateB = ({ answers }: Props) => {
  return (
    <Container>
      <ImageContainer>
        <Image
          resizeMode="contain"
          source={{
            uri:
              "https://lh3.googleusercontent.com/proxy/SVjlyBeOFqPb-_dUetmtNn3RK-HfEZ6vsMWk_nAVhOndin1dNq9mb09YdxXrUYFu2oBcUVPJi6furAmRpsrZXSiMaEk7F32VVMrt3ZS4PBL4N1P-LqFy75dPRGLvCVYpHu7Apn4ItyN-SQaeF6W3RDmqKrKIyE7V",
          }}
        />
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
