import React from "react";
import { Button, View } from "react-native";
import styled, { useTheme } from "styled-components/native";

import { SafeAreaView as _SafeAreaView } from "../../components";

type AcessoryButtonProps = {
  onPress(): void;
};

export const FinishButton = ({ onPress }: AcessoryButtonProps) => {
  const { colors } = useTheme();
  return (
    <View style={{ marginRight: 8, marginLeft: 8 }}>
      <Button color={colors.text} title="Finalizar" onPress={() => onPress()} />
    </View>
  );
};

export const SafeAreaView = styled(_SafeAreaView)`
  background-color: ${(props) => props.theme.colors.lessonBackgroundColor};
`;
