import styled from "styled-components/native";

import { Text as OriginalText } from "../../../../components";

export const Container = styled.View`
  flex: 1;
  margin-top: 32px;
`;

export const Answer = styled.View`
  flex: 1;
  background-color: blue;
  margin-top: 16px;
  margin-bottom: 16px;
`;

export const Text = styled(OriginalText)`
  font-size: 20px;
  line-height: 26px;
`;
