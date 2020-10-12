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
          <AnswerImageButton
            height={buttonHeight}
            uri="https://lh3.googleusercontent.com/proxy/SVjlyBeOFqPb-_dUetmtNn3RK-HfEZ6vsMWk_nAVhOndin1dNq9mb09YdxXrUYFu2oBcUVPJi6furAmRpsrZXSiMaEk7F32VVMrt3ZS4PBL4N1P-LqFy75dPRGLvCVYpHu7Apn4ItyN-SQaeF6W3RDmqKrKIyE7V"
          />
        </Cell>
        <Space />
        <Cell>
          <AnswerImageButton
            height={buttonHeight}
            selected={true}
            uri="https://lh3.googleusercontent.com/proxy/SVjlyBeOFqPb-_dUetmtNn3RK-HfEZ6vsMWk_nAVhOndin1dNq9mb09YdxXrUYFu2oBcUVPJi6furAmRpsrZXSiMaEk7F32VVMrt3ZS4PBL4N1P-LqFy75dPRGLvCVYpHu7Apn4ItyN-SQaeF6W3RDmqKrKIyE7V"
          />
        </Cell>
      </Row>
      <Space />
      <Row>
        <Cell>
          <AnswerImageButton
            height={buttonHeight}
            uri="https://lh3.googleusercontent.com/proxy/SVjlyBeOFqPb-_dUetmtNn3RK-HfEZ6vsMWk_nAVhOndin1dNq9mb09YdxXrUYFu2oBcUVPJi6furAmRpsrZXSiMaEk7F32VVMrt3ZS4PBL4N1P-LqFy75dPRGLvCVYpHu7Apn4ItyN-SQaeF6W3RDmqKrKIyE7V"
          />
        </Cell>
        <Space />
        <Cell>
          <AnswerImageButton
            height={buttonHeight}
            uri="https://lh3.googleusercontent.com/proxy/SVjlyBeOFqPb-_dUetmtNn3RK-HfEZ6vsMWk_nAVhOndin1dNq9mb09YdxXrUYFu2oBcUVPJi6furAmRpsrZXSiMaEk7F32VVMrt3ZS4PBL4N1P-LqFy75dPRGLvCVYpHu7Apn4ItyN-SQaeF6W3RDmqKrKIyE7V"
          />
        </Cell>
      </Row>
    </Container>
  );
};

export default TemplateC;
