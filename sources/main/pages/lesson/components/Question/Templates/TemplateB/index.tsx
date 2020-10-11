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
              "https://cdn.awsli.com.br/600x450/65/65883/produto/52042943/7470db9781.jpg",
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
