import styled from "styled-components/native";

export const Text = styled.Text`
  font-size: 16px;
  color: ${(props) => props.theme.colors.text};
`;

export const H1 = styled(Text)`
  font-size: 32px;
  font-weight: bold;
`;

export const H2 = styled(H1)`
  font-size: 28px;
`;

export const H3 = styled(H2)`
  font-size: 24px;
`;

export const TextButton = styled(Text)`
  font-size: 18px;
  font-weight: bold;
`;
