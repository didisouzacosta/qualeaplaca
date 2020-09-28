import React from "react";
import { Image } from "react-native";
import styled from "styled-components/native";
import { Text } from "./../../../../components/Text";

type OptionProps = {
  title: string;
};

export const ScrollView = styled.ScrollView`
  overflow: visible;
  margin-top: 32px;
  margin-bottom: 32px;
`;

export const Option = ({ title }: OptionProps) => {
  return (
    <Card>
      <Label>{title}</Label>
    </Card>
  );
};

const Card = styled.TouchableOpacity`
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
