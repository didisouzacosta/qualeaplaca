import React from "react";
import { Text, H2 } from "../../../../components/Text";
import { FlatList, View, ViewProps } from "react-native";
import styled from "styled-components/native";

export enum LessonType {
  Regulamentation = "#E02020",
  Warning = "#FFCE00",
  Identification = "#64BA09",
  Educational = "#0091FF",
  SpecialSignWarning = "#FF8520",
  MoreInformations = "#FF8520",
}

type LessonProps = {
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

export const SectionTitle = styled(Text)`
  padding: 16px;
  font-size: 22px;
  font-weight: bold;
`;

export const Lesson = ({ initials, title, type }: LessonProps) => (
  <Card style={{ backgroundColor: type }}>
    <LessonInitials>{initials}</LessonInitials>
    <LessonTitle>{title}</LessonTitle>
  </Card>
);

export const AllLessons = () => (
  <Card style={{ flexDirection: "row", alignItems: "center" }}>
    <Text style={{ flex: 1, fontSize: 18 }}>Todas as placas</Text>
    <View>
      <View style={{ flexDirection: "row" }}>
        <Bullet>
          <BulletLabel>R</BulletLabel>
        </Bullet>
        <Bullet>
          <BulletLabel>A</BulletLabel>
        </Bullet>
        <Bullet>
          <BulletLabel>IC</BulletLabel>
        </Bullet>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Bullet>
          <BulletLabel>i</BulletLabel>
        </Bullet>
        <Bullet>
          <BulletLabel>e</BulletLabel>
        </Bullet>
        <Bullet>
          <BulletLabel>SEA</BulletLabel>
        </Bullet>
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
  background-color: ${(props) => props.backgroundColor ?? "white"};
`;

const LessonInitials = styled(H2)`
  color: white;
`;

const LessonTitle = styled(Text)`
  font-size: 14px;
  color: white;
`;

const Bullet = styled.View`
  width: 20px;
  height: 20px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin: 1px;
  background-color: red;
`;

const BulletLabel = styled(Text)`
  font-size: 8px;
  color: white;
  font-weight: bold;
  text-transform: uppercase;
`;
