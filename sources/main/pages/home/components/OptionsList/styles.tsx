import React from "react";
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
      <Text>{title}</Text>
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
`;
