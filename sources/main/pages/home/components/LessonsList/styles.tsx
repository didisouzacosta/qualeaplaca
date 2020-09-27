import React from "react";
import styled from "styled-components/native";

import { Text, H2 } from "../../../../components/Text";
import { FlatList, View } from "react-native";
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
};

type BulletProps = {
  type: LessonType;
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

export const Lesson = ({ type }: LessonProps) => {
  const { initials, name } = lessonDescriptionByType(type);
  return (
    <Card type={type}>
      <LessonInitials>{initials}</LessonInitials>
      <LessonTitle>{name}</LessonTitle>
    </Card>
  );
};

export const AllLessons = () => (
  <Card style={{ flexDirection: "row", alignItems: "center" }}>
    <AllLessonTitle>Todas as placas</AllLessonTitle>
    <View>
      <View style={{ flexDirection: "row" }}>
        {[
          LessonType.Regulamentation,
          LessonType.Warning,
          LessonType.Identification,
        ].map((lesson) => (
          <Bullet key={lesson} type={lesson}>
            <BulletLabel>
              {lessonDescriptionByType(lesson).initials}
            </BulletLabel>
          </Bullet>
        ))}
      </View>
      <View style={{ flexDirection: "row" }}>
        {[
          LessonType.Educational,
          LessonType.SpecialSignWarning,
          LessonType.MoreInformations,
        ].map((lesson) => (
          <Bullet key={lesson} type={lesson}>
            <BulletLabel>
              {lessonDescriptionByType(lesson).initials}
            </BulletLabel>
          </Bullet>
        ))}
      </View>
    </View>
  </Card>
);

const Card = styled.TouchableOpacity<CardProps>`
  border-radius: 8px;
  padding-right: 16px;
  padding-left: 16px;
  padding-top: 12px;
  padding-bottom: 12px;
  margin-bottom: 8px;
  overflow: hidden;
  background-color: ${(props) => {
    if (props.type) {
      return lessonColorByType(props.type, props.theme);
    }
    return props.theme.colors.cardColor;
  }};
`;

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
