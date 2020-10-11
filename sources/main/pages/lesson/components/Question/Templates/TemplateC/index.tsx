import React, { useState } from "react";

import { AnswerImageButton } from "../../../Button";

import { Container, Row, Cell, Space } from "./styles";

const TemplateC = () => {
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
          <AnswerImageButton height={buttonHeight} />
        </Cell>
        <Space />
        <Cell>
          <AnswerImageButton height={buttonHeight} selected={true} />
        </Cell>
      </Row>
      <Space />
      <Row>
        <Cell>
          <AnswerImageButton height={buttonHeight} />
        </Cell>
        <Space />
        <Cell>
          <AnswerImageButton height={buttonHeight} />
        </Cell>
      </Row>
    </Container>
  );
};

export default TemplateC;
