import React from "react";

import { Button as Btn, BaseButton } from "./styles";

export const Button = ({
  children,
  backgroundColor,
  backgroundDarker,
  backgroundActive,
  disabled,
  style,
}: BaseButton.Props) => {
  return (
    <Btn
      backgroundActive={backgroundActive}
      backgroundDarker={backgroundDarker}
      backgroundColor={backgroundColor}
      disabled={disabled}
      style={style}
    >
      {children}
    </Btn>
  );
};
