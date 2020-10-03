import React from "react";
import { useColorScheme } from "react-native-appearance";
import { LessonType } from "../../enums";

import LessonsList, { LessonInfo } from "./components/LessonsList";
import { icons } from "./../../assets";
import { OptionListItem } from "./components/OptionsList";
import { SafeAreaView } from "./../../components/SafeAreaView";

const Home = () => {
  const theme = useColorScheme();

  let lessons: LessonInfo[] = [
    { type: LessonType.Regulamentation, progress: 44 },
    { type: LessonType.Warning, progress: 20 },
    { type: LessonType.Identification, progress: 100 },
    { type: LessonType.Educational, progress: 28 },
    { type: LessonType.SpecialSignWarning, progress: 0 },
    { type: LessonType.MoreInformations, progress: 2 },
  ];

  const options: OptionListItem[] = [
    { title: "Placas", icon: icons.adjusts.getImage(theme) },
    { title: "Progresso", icon: icons.progress.getImage(theme) },
    { title: "Ajustes", icon: icons.adjusts.getImage(theme) },
    { title: "Sobre", icon: icons.about.getImage(theme) },
  ];

  return (
    <SafeAreaView>
      <LessonsList lessons={lessons} options={options} />
    </SafeAreaView>
  );
};

export default Home;
