import React from "react";
import { Modal, Text } from "react-native";
import { useColorScheme } from "react-native-appearance";

import { LessonType } from "../../enums";
import LessonsList from "./components/LessonsList";
import { icons } from "./../../assets";
import { SafeAreaView } from "./../../components/SafeAreaView";
import { useNavigation } from "../../hooks/useNavigation";

const HomeScreen = () => {
  const theme = useColorScheme();
  const { navigate } = useNavigation();

  return (
    <SafeAreaView>
      <Modal visible={false} animationType="slide">
        <Text>sdfsdf</Text>
      </Modal>
      <LessonsList
        allBoardsOnPress={() => {
          navigate("Lesson", { type: LessonType.All });
        }}
        lessons={[
          {
            type: LessonType.Regulamentation,
            progress: 44,
            onPress: (type) => {
              navigate("Lesson", {
                type,
              });
            },
          },
          {
            type: LessonType.Warning,
            progress: 20,
            onPress: (type) => {
              navigate("Lesson", { type });
            },
          },
          {
            type: LessonType.Identification,
            progress: 100,
            onPress: (type) => {
              navigate("Lesson", {
                type,
              });
            },
          },
          {
            type: LessonType.Educational,
            progress: 28,
            onPress: (type) => {
              navigate("Lesson", { type });
            },
          },
          {
            type: LessonType.SpecialSignWarning,
            progress: 0,
            onPress: (type) => {
              navigate("Lesson", {
                type,
              });
            },
          },
          {
            type: LessonType.MoreInformations,
            progress: 2,
            onPress: (type) => {
              navigate("Lesson", {
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
              navigate("Boards");
            },
          },
          {
            title: "Progresso",
            icon: icons.progress.getImage(theme),
            onPress: () => {
              navigate("Progress");
            },
          },
          {
            title: "Ajustes",
            icon: icons.adjusts.getImage(theme),
            onPress: () => {
              navigate("Adjusts");
            },
          },
          {
            title: "Sobre",
            icon: icons.about.getImage(theme),
            onPress: () => {
              navigate("About");
            },
          },
        ]}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
