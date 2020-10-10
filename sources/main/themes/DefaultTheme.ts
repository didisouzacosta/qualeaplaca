import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      text: string;
      backgroundColor: string;
      cardColor: string;
      progress: string;
      progressBackgroundColor: string;
      lessonBackgroundColor: string;
      lessons: {
        regulamentation: string;
        warning: string;
        identification: string;
        educational: string;
        specialSignOfWarning: string;
        moreInformations: string;
      };
      answerButton: {
        active: string;
        isCorrect: string;
        background: string;
        raiseColor: string;
        raiseIsCorrectColor: string;
        raiseSelectedColor: string;
      };
    };
  }
}
