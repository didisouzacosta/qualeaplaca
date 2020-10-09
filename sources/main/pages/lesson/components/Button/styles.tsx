import styled from "styled-components/native";

import { TextButton } from "./../../../../components";

export const Button = styled.TouchableOpacity`
  background-color: lightgray;
  border-radius: 12px;
  padding: 16px;
`;

export const AnswerButtonContainer = styled(Button)`
  display: flex;
  flex-direction: row;
  margin-bottom: 8px;
`;

export const Text = styled(TextButton)``;

export const AnswerLabel = styled(Text)`
  width: 24px;
  margin-right: 8px;
`;

export const AnswerText = styled(Text)`
  flex: 1;
  font-weight: normal;
`;
