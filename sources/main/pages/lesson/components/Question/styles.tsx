import styled from "styled-components/native";

import { Text as OriginalText } from "../../../../components";

export const Container = styled.View`
  flex: 1;
  margin-top: 32px;
  /* background-color: red; */
`;

export const Text = styled(OriginalText)`
  font-size: 20px;
  /* font-weight: bold; */
  line-height: 26px;
`;
