import React from "react";
import { StyleProp, ViewProps } from "react-native";
import styled from "styled-components/native";

type SafeAreaProps = {
  children?: React.ReactNode;
  style?: StyleProp<ViewProps>;
};

export const SafeAreaView = ({ children, style }: SafeAreaProps) => {
  return (
    <SafeArea style={style}>
      <SafeAreaContent>{children && children}</SafeAreaContent>
    </SafeArea>
  );
};

const SafeArea = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props) => props.theme.colors.backgroundColor};
`;

const SafeAreaContent = styled.View`
  flex: 1;
  margin: 16px;
  overflow: visible;
`;
