import React from "react";

import { AnswerImageButton } from "../../../Button";

import { Container, Row, Cell, Space } from "./styles";

const TemplateC = () => {
  return (
    <Container>
      <Row>
        <Cell>
          <AnswerImageButton selected={true} />
        </Cell>
        <Space />
        <Cell>
          <AnswerImageButton />
        </Cell>
      </Row>
      <Space />
      <Row>
        <Cell>
          <AnswerImageButton />
        </Cell>
        <Space />
        <Cell>
          <AnswerImageButton />
        </Cell>
      </Row>
    </Container>
  );
};

export default TemplateC;
