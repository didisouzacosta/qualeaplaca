import { FlatList } from "react-native";
import styled from "styled-components/native";

export const List = styled(FlatList as new () => FlatList<JSX.Element>).attrs(
  () => ({
    contentContainerStyle: {
      padding: 16,
    },
  })
)`
  overflow: visible;
`;

export const SectionTitle = styled.Text`
  font-size: 22px;
  font-weight: bold;
  padding: 16px;
`;
