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
      button: {
        backgroundActiveColor: string;
        backgroundColor: string;
        raiseColor: string;
      };
      verifyButton: {
        backgroundActiveColor: string;
        backgroundColor: string;
        raiseColor: string;
      };
      answerButton: {
        backgroundSelectedColor: string;
        backgroundActiveColor: string;
        backgroundIsCorrectColor: string;
        backgroundColor: string;
        raiseColor: string;
        raiseIsCorrectColor: string;
        raiseSelectedColor: string;
      };
      helpButton: {
        backgroundActiveColor: string;
        backgroundColor: string;
        raiseColor: string;
      };
    };
  }
}
