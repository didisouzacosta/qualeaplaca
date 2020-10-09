import styled from "styled-components/native";

import { TextButton } from "./../../../../components";

export const Button = styled.TouchableOpacity`
  background-color: lightgray;
  border-radius: 12px;
  padding: 16px;
`;

export const Text = styled(TextButton)`
  text-align: center;
`;
