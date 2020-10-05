import React from "react";
import styled from "styled-components/native";

type SafeAreaProps = {
  children?: JSX.Element;
};

export const SafeAreaView = ({ children }: SafeAreaProps) => {
  return (
    <SafeArea>
      <SafeAreaContent>{children && children}</SafeAreaContent>
    </SafeArea>
  );
};

const SafeArea = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props) => props.theme.colors.backgroundColor};
`;

const SafeAreaContent = styled.View`
  margin: 16px;
  overflow: visible;
`;
