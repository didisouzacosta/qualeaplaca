import React from "react";
import { useColorScheme } from "react-native-appearance";
import { StackScreenProps } from "@react-navigation/stack";

import { LessonType } from "../../enums";
import LessonsList from "./components/LessonsList";
import { icons } from "./../../assets";
import { SafeAreaView } from "./../../components/SafeAreaView";
import { MainStackParams } from "./../../navigation";

type Props = StackScreenProps<MainStackParams, "Home">;

const HomeScreen = ({ navigation }: Props) => {
  const theme = useColorScheme();

  return (
    <SafeAreaView>
      <LessonsList
        allBoardsOnPress={() => {
          navigation.navigate("Lesson", { type: LessonType.All });
        }}
        lessons={[
          {
            type: LessonType.Regulamentation,
            progress: 44,
            onPress: (type) => {
              navigation.navigate("Lesson", {
                type,
              });
            },
          },
          {
            type: LessonType.Warning,
            progress: 20,
            onPress: (type) => {
              navigation.navigate("Lesson", { type });
            },
          },
          {
            type: LessonType.Identification,
            progress: 100,
            onPress: (type) => {
              navigation.navigate("Lesson", {
                type,
              });
            },
          },
          {
            type: LessonType.Educational,
            progress: 28,
            onPress: (type) => {
              navigation.navigate("Lesson", { type });
            },
          },
          {
            type: LessonType.SpecialSignWarning,
            progress: 0,
            onPress: (type) => {
              navigation.navigate("Lesson", {
                type,
              });
            },
          },
          {
            type: LessonType.MoreInformations,
            progress: 2,
            onPress: (type) => {
              navigation.navigate("Lesson", {
                type,
              });
            },
          },
        ]}
        options={[
          {
            title: "Placas",
            icon: icons.adjusts.getImage(theme),
            onPress: () => {
              navigation.navigate("Boards");
            },
          },
          {
            title: "Progresso",
            icon: icons.progress.getImage(theme),
            onPress: () => {
              navigation.navigate("Progress");
            },
          },
          {
            title: "Ajustes",
            icon: icons.adjusts.getImage(theme),
            onPress: () => {
              navigation.navigate("Adjusts");
            },
          },
          {
            title: "Sobre",
            icon: icons.about.getImage(theme),
            onPress: () => {
              navigation.navigate("About");
            },
          },
        ]}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
