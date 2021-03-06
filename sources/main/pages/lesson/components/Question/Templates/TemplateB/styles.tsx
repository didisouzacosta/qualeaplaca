import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
`;

export const ImageContainer = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.cardColor};
  border-radius: 16px;
  margin-bottom: 32px;
  padding: 24px;
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%;
`;

export const Row = styled.View`
  display: flex;
  flex-direction: row;
`;

export const Cell = styled.View`
  flex: 1;
`;

export const Space = styled.View`
  width: 8px;
  height: 8px;
`;
