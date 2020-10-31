import styled from "styled-components/native";

import { Text as _Text } from "../../../../components";

export const Container = styled.View`
  flex: 1;
  margin-top: 32px;
`;

export const Answer = styled.View`
  flex: 1;
  margin-top: 32px;
  margin-bottom: 32px;
`;

export const Text = styled(_Text)`
  font-size: 20px;
  line-height: 26px;
`;

export const ButtonContainer = styled.View`
  flex-direction: column;
`;
