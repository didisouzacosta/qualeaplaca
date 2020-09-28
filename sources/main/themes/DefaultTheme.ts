import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      text: string;
      backgroundColor: string;
      cardColor: string;
      lessons: {
        regulamentation: string;
        warning: string;
        identification: string;
        educational: string;
        specialSignOfWarning: string;
        moreInformations: string;
      };
    };
  }
}
