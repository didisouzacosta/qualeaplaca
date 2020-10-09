import styled from "styled-components/native";

import { SafeAreaView as _SafeAreaView } from "../../components";

export const SafeAreaView = styled(_SafeAreaView)`
  background-color: ${(props) => props.theme.colors.lessonBackgroundColor};
`;
