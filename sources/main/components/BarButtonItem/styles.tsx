import styled from "styled-components/native";

import { Text } from "./../Text";

export const BarButtonItemContainer = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.button.backgroundColor};
  padding-top: 6px;
  padding-bottom: 6px;
  padding-left: 12px;
  padding-right: 12px;
  border-radius: 8px;
`;

export const BarButtonItemText = styled(Text)``;
