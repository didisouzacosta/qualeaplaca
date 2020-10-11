import React from "react";
import styled from "styled-components";
import { ViewStyle } from "react-native";
import AwesomeButton from "react-native-really-awesome-button";

export namespace BaseButton {
  export type Props = {
    children?: React.ReactNode;
    disabled?: boolean;
    backgroundActive?: string;
    backgroundDarker?: string;
    backgroundColor?: string;
    style?: ViewStyle;
  };
}

const BaseButton = ({
  children,
  style,
  disabled,
  backgroundActive,
  backgroundDarker,
  backgroundColor,
}: BaseButton.Props) => {
  return (
    <AwesomeButton
      backgroundActive={backgroundActive}
      backgroundDarker={backgroundDarker}
      backgroundColor={backgroundColor}
      backgroundShadow="transparent"
      borderRadius={12}
      disabled={disabled}
      stretch={true}
      style={style}
    >
      {children}
    </AwesomeButton>
  );
};

export const Button = styled(BaseButton)`
  opacity: ${(props) => (props.disabled ? 0.3 : 1)};
`;
