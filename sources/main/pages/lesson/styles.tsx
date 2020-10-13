import styled from "styled-components/native";

import {
  SafeAreaView as _SafeAreaView,
  BarButtonItem as _BarButtonItem,
} from "../../components";

export const BarButtonItem = styled(_BarButtonItem)``;

export const SafeAreaView = styled(_SafeAreaView)`
  background-color: ${(props) => props.theme.colors.lessonBackgroundColor};
`;
