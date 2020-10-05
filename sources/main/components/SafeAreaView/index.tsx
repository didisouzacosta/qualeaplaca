import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";

type SafeAreaProps = {
  children?: JSX.Element;
};

export const SafeAreaView = ({ children }: SafeAreaProps) => {
  return (
    <SafeArea>
      <View style={{ margin: 16, overflow: "visible" }}>
        {children && children}
      </View>
    </SafeArea>
  );
};

const SafeArea = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props) => props.theme.colors.backgroundColor};
`;
