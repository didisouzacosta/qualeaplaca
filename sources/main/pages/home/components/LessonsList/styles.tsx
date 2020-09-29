import React from "react";
import { FlatList, View } from "react-native";
import styled from "styled-components/native";

import { Text, H2 } from "../../../../components/Text";
import { LessonType } from "../../../../enums";
import {
  lessonColorByType,
  lessonDescriptionByType,
} from "../../../../utils/lessonInfos";

type CardProps = {
  type?: LessonType;
};

type LessonProps = {
  type: LessonType;
  progress: number;
};

type BulletProps = {
  type: LessonType;
};

type AllLessonsProps = {
  types: LessonType[];
};

type LessonProgressProps = {
  percentage: number;
};

export const List = styled(FlatList as new () => FlatList<JSX.Element>).attrs(
  () => ({
    contentContainerStyle: {
      padding: 16,
    },
  })
)`
  overflow: visible;
`;

export const SectionTitle = styled(Text)`
  padding: 16px;
  font-size: 22px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.text};
`;

export const Lesson = ({ type, progress }: LessonProps) => {
  const { initials, name } = lessonDescriptionByType(type);
  return (
    <Card type={type}>
      <View style={{ flex: 1, marginRight: 16 }}>
        <LessonInitials>{initials}</LessonInitials>
        <LessonTitle>{name}</LessonTitle>
      </View>
      <LessonProgress percentage={progress} />
    </Card>
  );
};

export const AllLessons = ({ types }: AllLessonsProps) => (
  <Card style={{ flexDirection: "row", alignItems: "center" }}>
    <AllLessonTitle>Todas as placas</AllLessonTitle>
    <View style={{ flexDirection: "row", flexWrap: "wrap", maxWidth: 66 }}>
      {types.map((type) => (
        <Bullet key={type} type={type}>
          <BulletLabel>{lessonDescriptionByType(type).initials}</BulletLabel>
        </Bullet>
      ))}
    </View>
  </Card>
);

const Card = styled.TouchableOpacity<CardProps>`
  flex-direction: row;
  align-items: center;
  border-radius: 8px;
  padding-right: 16px;
  padding-left: 16px;
  padding-top: 12px;
  padding-bottom: 12px;
  margin-bottom: 8px;
  min-height: 76px;
  overflow: hidden;
  background-color: ${(props) => {
    if (props.type) {
      return lessonColorByType(props.type, props.theme);
    }
    return props.theme.colors.cardColor;
  }};
`;

const LessonProgress = ({ percentage }: LessonProgressProps) => (
  <View style={{ width: 48, height: 48 }}>
    <View
      style={{
        width: "100%",
        height: "100%",
        borderColor: "white",
        borderWidth: 6,
        borderRadius: 24,
        opacity: 0.3,
      }}
    ></View>
    <View
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ fontSize: 10, fontWeight: "bold", color: "white" }}>
        {percentage}%
      </Text>
    </View>
  </View>
);

const LessonInitials = styled(H2)`
  color: white;
`;

const LessonTitle = styled(Text)`
  font-size: 14px;
  color: white;
`;

const AllLessonTitle = styled(Text)`
  flex: 1;
  font-size: 18px;
`;

const Bullet = styled.View<BulletProps>`
  width: 20px;
  height: 20px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin: 1px;
  background-color: ${(props) => lessonColorByType(props.type, props.theme)};
`;

const BulletLabel = styled(Text)`
  font-size: 8px;
  color: white;
  font-weight: bold;
  text-transform: uppercase;
`;
