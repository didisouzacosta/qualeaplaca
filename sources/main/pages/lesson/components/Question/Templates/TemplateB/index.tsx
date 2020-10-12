import React from "react";

import { AnswerButton } from "../../../Button";

import { Container, Row, Cell, Space, ImageContainer, Image } from "./styles";

const TemplateB = () => {
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
          <AnswerButton label="a)" title="R-17" />
        </Cell>
        <Space />
        <Cell>
          <AnswerButton label="b)" title="R-1" />
        </Cell>
      </Row>
      <Space />
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
