import { DefaultTheme } from "styled-components/native";

import { light } from "./light";

export const dark: DefaultTheme = {
  colors: {
    text: "#fff",
    backgroundColor: "#1E1E1E",
    cardColor: "#434343",
    lessons: { ...light.colors.lessons },
  },
};
