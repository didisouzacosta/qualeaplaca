import styled from "styled-components/native";

type ProgressProps = {
  percentage: Number;
};

export const InfosContainer = styled.View`
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 8px;
`;

export const Label = styled.Text`
  color: darkgray;
`;

export const ProgressContainer = styled.View`
  height: 8px;
  background-color: ${(props) => props.theme.colors.progressBackgroundColor};
  overflow: hidden;
  border-radius: 4px;
`;

export const Progress = styled.View<ProgressProps>`
  height: 100%;
  width: ${(props) => `${props.percentage}%`};
  border-radius: 4px;
  background-color: ${(props) => props.theme.colors.progress};
`;
