import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      backgroundColor: string;
      cardColor: string;
    };
  }
}
