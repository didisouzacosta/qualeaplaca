import { DefaultTheme } from "styled-components/native";

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
    button: {
      backgroundActiveColor: "#434343",
      backgroundColor: "#434343",
      raiseColor: "#2F2F2F",
    },
    verifyButton: { ...light.colors.verifyButton },
    answerButton: {
      backgroundSelectedColor: "#579BBF",
      backgroundActiveColor: "#353535",
      backgroundIsCorrectColor: "#71A838",
      backgroundColor: "#434343",
      raiseColor: "#2F2F2F",
      raiseIsCorrectColor: "#417D00",
      raiseSelectedColor: "#1E6992",
    },
  },
};
