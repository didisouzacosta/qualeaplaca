import React from "react";

import { AnswerButton } from "../../../Button";

import { Container, Row, Cell, Space, ImageContainer } from "./styles";

const TemplateB = () => {
  return (
    <Container>
      <ImageContainer />
      <Row>
        <Cell>
          <AnswerButton label="a)" title="R-17" />
        </Cell>
        <Space />
        <Cell>
          <AnswerButton label="b)" title="R-1" />
        </Cell>
      </Row>
      <Row>
        <Cell>
          <AnswerButton label="c)" title="R-44" />
        </Cell>
        <Space />
        <Cell>
          <AnswerButton label="d)" title="R-4" />
        </Cell>
      </Row>
    </Container>
  );
};

export default TemplateB;
