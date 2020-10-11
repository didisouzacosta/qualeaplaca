import { DefaultTheme } from "styled-components/native";
import { icons } from "../assets";

export const light: DefaultTheme = {
  colors: {
    text: "#000",
    backgroundColor: "#f4f4f4",
    cardColor: "#fff",
    progress: "#6dd400",
    progressBackgroundColor: "#eaeaea",
    lessonBackgroundColor: "#f4f4f4",
    lessons: {
      regulamentation: "#f94144",
      warning: "#ffba08",
      identification: "#90be6d",
      educational: "#30638e",
      specialSignOfWarning: "#FC7A1E",
      moreInformations: "gray",
    },
    button: {
      backgroundActiveColor: "#fff",
      backgroundColor: "#fff",
      raiseColor: "#E4E4E4",
    },
    answerButton: {
      backgroundActiveColor: "#CFEEFF",
      backgroundIsCorrectColor: "#B5EB7C",
      backgroundColor: "#fff",
      raiseColor: "#E4E4E4",
      raiseIsCorrectColor: "#A3CB79",
      raiseSelectedColor: "#B1E3FF",
    },
  },
};
