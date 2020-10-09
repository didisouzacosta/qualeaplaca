import { DefaultTheme } from "styled-components/native";
import { icons } from "../assets";

import { light } from "./light";

export const dark: DefaultTheme = {
  colors: {
    text: "#fff",
    backgroundColor: "#1E1E1E",
    cardColor: "#434343",
    progress: "#6dd400",
    progressBackgroundColor: "#000",
    lessonBackgroundColor: "#1E1E1E",
    lessons: { ...light.colors.lessons },
  },
};
