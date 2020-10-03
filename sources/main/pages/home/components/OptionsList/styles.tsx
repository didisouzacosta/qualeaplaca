import React from "react";
import styled from "styled-components/native";
import { Text } from "./../../../../components/Text";

export type OptionProps = {
  title: string;
  icon?: any;
  onPress: () => void;
};

export const ScrollView = styled.ScrollView`
  overflow: visible;
  margin-top: 32px;
  margin-bottom: 32px;
`;

export const Option = ({ title, icon, onPress }: OptionProps) => {
  return (
    <Card onPress={() => onPress()}>
      <Label>{title}</Label>
      {icon && <Image source={icon} resizeMode="contain" />}
    </Card>
  );
};

const Card = styled.TouchableOpacity`
  /* flex: 1; */
  height: 160px;
  width: 120px;
  background-color: white;
  padding: 16px;
  margin-right: 8px;
  border-radius: 8px;
  box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.05);
  background-color: ${(props) => props.theme.colors.cardColor};
`;

const Label = styled(Text)`
  font-weight: bold;
`;

const Image = styled.Image`
  flex: 1;
  width: 100%;
  margin-top: 12px;
`;
