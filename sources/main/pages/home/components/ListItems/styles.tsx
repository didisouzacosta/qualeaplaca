import React from "react";
import { FlatList, ViewProps } from "react-native";
import styled from "styled-components/native";

export enum LessonType {
  Regulamentation = "#E02020",
  Warning = "#FFCE00",
  Identification = "#64BA09",
  Educational = "#0091FF",
  SpecialSignWarning = "#FF8520",
  MoreInformations = "#FF8520",
}

type LessonCardProps = {
  type: LessonType;
  title: string;
  initials: string;
};

interface CardProps extends ViewProps {
  backgroundColor?: string;
}

export const List = styled(FlatList as new () => FlatList<JSX.Element>).attrs(
  () => ({
    contentContainerStyle: {
      padding: 16,
    },
  })
)`
  overflow: visible;
`;

export const SectionTitle = styled.Text`
  padding: 16px;
  font-size: 22px;
  font-weight: bold;
`;

export const Card = styled.TouchableOpacity<CardProps>`
  border-radius: 8px;
  padding-right: 16px;
  padding-left: 16px;
  padding-top: 12px;
  padding-bottom: 12px;
  margin-bottom: 8px;
  background-color: ${(props) => props.backgroundColor ?? "white"};
`;

export const LessonCard = ({ initials, title, type }: LessonCardProps) => (
  <Card style={{ backgroundColor: type }}>
    <LessonInitial>{initials}</LessonInitial>
    <LessonTitle>{title}</LessonTitle>
  </Card>
);

const LessonInitial = styled.Text`
  font-size: 32px;
  font-weight: bold;
  color: white;
`;

const LessonTitle = styled.Text`
  font-size: 14px;
  color: white;
`;
